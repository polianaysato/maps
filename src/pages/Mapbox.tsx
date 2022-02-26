// @ts-nocheck
import { useRef, useEffect, useState, useCallback } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import ReactDOM from 'react-dom'
import { makeStyles, Box, IconButton } from '@material-ui/core'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove';
import clusterBlue from "../assets/clusterBlue.svg"
import unclusteredPoint from "../assets/unclusteredPoint.svg"
import "../styles/App.css"
import Legend from "../components/Legend"
import { mapboxStyle, states12MilesRadius, states12MilesSteps, states18MilesRadius, states18MilesSteps, states6MilesRadius, states6MilesSteps, statesHeatmapFill, statesHeatmapSteps, statesMapFilter, statesCircleStroke18, statesCircleStroke6, statesCircleStroke12, getPixels } from "../helpers/Utils"


const useStyles = makeStyles(() => ({
  chartDiv: {
    height: '25em'
  },
  ctrlWrapper: {
    zIndex: 1000,
    position: 'absolute',
    right: 0,
    top: 0,
    display: 'block',
    width: 30,
    margin: 10,
  },
  plus: {
    boxShadow: 'rgb(0, 0, 0, 0.2) 0px 3px 1px -2px, rgb(0, 0, 0, 0.14) 0px 2px 2px 0px, rgb(0, 0, 0, 0.12) 0px 1px 5px 0px',
    background: '#FFF',
    width: 30,
    height: 30,
    borderRadius: '5px 5px 0px 0px',
  },
  minus: {
    boxShadow: 'rgb(0, 0, 0, 0.2) 0px 3px 1px -2px, rgb(0, 0, 0, 0.14) 0px 2px 2px 0px, rgb(0, 0, 0, 0.12) 0px 1px 5px 0px',
    background: '#FFF',
    width: 30,
    height: 30,
    borderRadius: '0px 0px 5px 5px',
  }
}))

mapboxgl.accessToken =
  "pk.eyJ1IjoiZW5nbWFwYm94IiwiYSI6ImNqY3M1ZXA5czM2ZGYzM283ZmhscDltcGMifQ.Za7ut_7UThGzvjWhX4ACJQ";


export const Mapbox = ({ geoJson, poi, Popup }) => {
  const [colorScheme, setColorScheme] = useState<Array<string>>([])
  const [steps, setSteps] = useState<Array<number>>([])

  const [poiViews6Miles, setPoiViews6Miles] = useState<Array<number>>([])
  const [poiColor6Miles, setPoiColor6Miles] = useState<Array<string>>([])

  const [poiViews12Miles, setPoiViews12Miles] = useState<Array<number>>([])
  const [poiColor12Miles, setPoiColor12Miles] = useState<Array<string>>([])

  const [poiViews18Miles, setPoiViews18Miles] = useState<Array<number>>([])
  const [poiColor18Miles, setPoiColor18Miles] = useState<Array<string>>([])

  const mapContainer = useRef()
  const map = useRef()
  const popUpRef = useRef()
  const geoCoder = useRef()


  const classes = useStyles()


  useEffect(() => {
    setColorScheme(statesHeatmapFill)
    setSteps(statesHeatmapSteps)

    setPoiColor6Miles(states6MilesRadius)

    setPoiViews6Miles(states6MilesSteps)

    setPoiColor12Miles(states12MilesRadius)
    setPoiViews12Miles(states12MilesSteps)

    setPoiColor18Miles(states18MilesRadius)
    setPoiViews18Miles(states18MilesSteps)
  }, [])

  useEffect(() => {
    //initialize popup just once
    popUpRef.current = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false,
    })
}, [])


  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapboxStyle,
      center: [-97, 36],
      zoom: 3.3,
    })

    console.log(poi)

    // only want to work with the map after it has fully loaded
    // if you try to add sources and layers before the map has loaded
    // things will not work properly
    map.current.on("load", () => {
      map.current.addSource("sites", {
        type: "geojson",
        data: poi,
      })

      map.current.addSource("states", {
        type: "geojson",
        data: geoJson,
      })

      map.current.addLayer({
        id: "hover",
        type: "fill",
        source: "states",
        paint: {
          "fill-color": statesMapFilter,
          "fill-opacity": 1,
          "fill-outline-color": "#000",
        },
        
      })

      map.current.addLayer({
        id: 'outerCircle',
        type: 'circle',
        'icon-allow-overlap': true,
        source: 'sites',
        paint: {
          "circle-color": statesCircleStroke18,
          "circle-radius": [
            "interpolate",
            ["linear"],
            ["zoom"],
            // zoom is 5 (or less) -> circle radius will be 1px
            4,
            9,
            // zoom is 10 (or greater) -> circle radius will be 5px
          ],
            'circle-opacity': 1,
        },
    })

      map.current.addLayer({
        id: 'radius',
        type: 'circle',
        source: 'sites',
        'icon-allow-overlap': true,
        paint: {
          "circle-color": statesCircleStroke12,
          "circle-radius": [
            "interpolate",
            ["linear"],
            ["zoom"],
            // zoom is 5 (or less) -> circle radius will be 1px
            4,
            6,
            // zoom is 10 (or greater) -> circle radius will be 5px
          ],
            'circle-opacity': 1,
        },
    })

      map.current.addLayer({
        id: "unclustered-point",
        type: "circle",
        source: "sites",
        filter: ["!", ["has", "point_count"]],
        'icon-allow-overlap': true,
        paint: {
          "circle-color": statesCircleStroke6,
          "circle-radius": [
            "interpolate",
            ["linear"],
            ["zoom"],
            // zoom is 5 (or less) -> circle radius will be 1px
            4,
            3,
            // zoom is 10 (or greater) -> circle radius will be 5px
          ],
          'circle-opacity': 1,
        },
      })



      map.current.on("mouseover", "radius", (e: any) => {
        e.preventDefault()
        let f = map.current.queryRenderedFeatures(e.point, { layers: ['radius'] })

        if (f.length) {
            map.current.getCanvas().style.cursor = 'pointer'
            let popupNode = document.createElement('div')
            if (Popup) {
                let elem = <Popup data={f[0]} />
                ReactDOM.render(elem, popupNode)
                popUpRef.current
                    .setLngLat(e.lngLat)
                    .setDOMContent(popupNode)
                    .addTo(map.current)
            }
            return
        }
      })

        map.current.on('mouseover', `hover`, () => {
        map.current.getCanvas().style.cursor = ''
        popUpRef.current.remove()
      }) 
      

      map.current.on('click', (e) => {
        if (e.defaultPrevented === false) {
          popUpRef.current.remove()
        }
      });
      
     
    })

    // cleanup function to remove map on unmount
    return () => map.current.remove()
  }, [Popup, geoJson, poi, poiColor12Miles, poiColor6Miles, poiViews12Miles, poiViews6Miles])


  const createRadiusOnZoom = useCallback((currentZoom: number) => {
    let stops18: any = []
    let stops12: any = []
    let stops6: any = []
    let innerRadius = {}
    let midRadius = {}
    let outerRadius = {}
    let pixels: number = 7

    if (map.current) {
        pixels = Number(getPixels('US', Number(currentZoom), 50))
    }

    let pixels18 = Number(pixels) 
    let pixels12 = Number(pixels*0.5) 
    let pixels6 = Number(pixels*0.3) 
    stops18.push(['Mock', pixels18])
    stops12.push(['Mock', pixels12])
    stops6.push(['Mock', pixels6])

    innerRadius = {
        property: 'vendor',
        type: 'categorical',
        stops: stops6,
    }

    midRadius = {
      property: 'vendor',
        type: 'categorical',
        stops: stops12,
    }

    outerRadius = {
      property: 'vendor',
        type: 'categorical',
        stops: stops18,
    }

    return {
        innerRadius: innerRadius,
        midRadius: midRadius,
        outerRadius: outerRadius
    }
}, [])


const zoomIn = useCallback(() => {
  if (map.current !== undefined) {
      let currentZoom = map.current.getZoom()

      if (currentZoom) {
          map.current.zoomTo(Number(currentZoom) + 1, {
              duration: 350,
          })

          let radius = createRadiusOnZoom(currentZoom)

          if (map.current !== undefined && map.current.isStyleLoaded()) {
            map.current.setPaintProperty('unclustered-point', 'circle-radius', radius.innerRadius)
            map.current.setPaintProperty('outerCircle', 'circle-radius', radius.outerRadius)
            map.current.setPaintProperty('radius', 'circle-radius', radius.midRadius)
            
        } 
      }
  }
}, [createRadiusOnZoom])


const zoomOut = useCallback(() => {
  if (map.current !== undefined) {
      let currentZoom = map.current.getZoom()

      if (currentZoom) {
          map.current.zoomTo(Number(currentZoom) - 1, {
              duration: 350,
          })

          let radius = createRadiusOnZoom(currentZoom - 1)

          if (map.current !== undefined && map.current.isStyleLoaded()) {
            map.current.setPaintProperty('unclustered-point', 'circle-radius', radius.innerRadius)
            map.current.setPaintProperty('radius', 'circle-radius', radius.midRadius)
            map.current.setPaintProperty('outerCircle', 'circle-radius', radius.outerRadius)
        } 
      }
  }
}, [createRadiusOnZoom])


  return (
    <>
      <Legend
        type="dots"
        clusters="Clusters"
        pointCount="Views"
        clusterImg={clusterBlue}
        unclusteredImg={unclusteredPoint}
        unclusteredPoint="Unclustered Points"
        colorScheme={colorScheme}
        steps={steps}
        poi="POI"
        views="Views"
        poiColor6Miles={poiColor6Miles}
        poiViews6Miles={poiViews6Miles}
        poiColor12Miles={poiColor12Miles}
        poiViews12Miles={poiViews12Miles}
        poiColor18Miles={poiColor18Miles}
        poiViews18Miles={poiViews18Miles}
      />
      <div ref={mapContainer} style={{ width: "100%", height: "100vh" }} />
      <div className={classes.ctrlWrapper}>
        <Box>
          <IconButton aria-label="zoom in" onClick={zoomIn} className={classes.plus}>
            <AddIcon />
          </IconButton>
          <IconButton aria-label="zoom out" onClick={zoomOut} className={classes.minus}>
            <RemoveIcon /> 
          </IconButton>
        </Box>
      </div>
    </>
  )
}


