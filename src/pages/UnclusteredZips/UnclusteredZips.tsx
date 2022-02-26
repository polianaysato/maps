import { Grid } from '@material-ui/core'
import poiSites from "../../data/POI.json"
import { Mapbox } from "../Mapbox"
import { Popup } from "../../components/Popup"
import zipGeoJson from "../../data/zipGeoJson.json"


export const UnclusteredZips = () => {

    return (
        <Grid container xs>
            <Mapbox geoJson={zipGeoJson} poi={poiSites} Popup={Popup}/>
        </Grid>
    )
}
