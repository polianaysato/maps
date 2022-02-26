// @ts-nocheck
import { PlaceOutlined } from "@material-ui/icons"
import { useRef, useEffect, useState } from "react"
import * as am4core from "@amcharts/amcharts4/core"
import * as am4charts from '@amcharts/amcharts4/charts'
import { makeStyles } from "@material-ui/styles"
import { miles6, miles12, miles18 } from "../helpers/Utils"
import shortid from 'shortid'
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'block', 
        margin: 'auto', 
        width: 'auto'
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingTop: -13,
        paddingBottom: 10
    },
    title: {
        fontSize: '13px',
        fontFamily: 'Nunito Sans, sans-serif',
    },
    subTitle: {
        fontSize: '13px',
        fontFamily: 'Nunito Sans, sans-serif',
        fontWeight: 'bold'
    },
    wrapper: {
        display: 'block',
        margin: 'auto',
        height: '25em',
        textAlign: 'center',
        '& div': {
            marginTop: -15
        },
        marginTop: 20
    },
    hidden: {
        display: 'none'
    }
}))

export const Popup = ({ data }) => {

    const classes = useStyles()
    const [label, setLabel] = useState()
    const [zip, setZip] = useState()
    const [open, setOpen] = useState(true)

    const chartDiv6 = useRef<string>('chartDiv' + shortid.generate())
    const chartDiv12 = useRef<string>('chartDiv' + shortid.generate())
    const chartDiv18 = useRef<string>('chartDiv' + shortid.generate())

    const createPieSeries = (criteria: string, miles: string, chart: any) => {
        let pieSeries = chart.series.push(new am4charts.PieSeries())
        am4core.options.autoSetClassName = true
        pieSeries.dataFields.value = criteria
        pieSeries.dataFields.category = miles
    
        pieSeries.ticks.template.disabled = true
        pieSeries.alignLabels = false
        let labels = pieSeries.labels.template
        labels.text = "[bold]{value} {category} \n {percent}%[/]"

        pieSeries.tooltip.getFillFromObject = false
        //pieSeries.tooltip.label.propertyFields.fill = "#000"
        pieSeries.tooltip.background.propertyFields.stroke = "color"
        pieSeries.slices.template.tooltipText = "[black bold font-size: 13px]{category}:[/] [black font-size: 13px]{value} \n {percent}%[/]";
    
        labels.radius = am4core.percent(-40)
        labels.fill = am4core.color("black")
        labels.wrap = true
        labels.truncate = true
        labels.maxWidth = 50

    
        pieSeries.slices.template.propertyFields.fill = "color"
        //pieSeries.slices.template.propertyFields.showTooltipOn = false
    }

    useEffect(() => {
        let properties = data && data!.properties
        //let coordinates = [ data.lngLat.lat, data.lngLat.lng ]

        setLabel(properties.Label)
        setZip(properties.Zip)

        let chart6 = am4core.create(chartDiv6.current, am4charts.PieChart)
        let chart12 = am4core.create(chartDiv12.current, am4charts.PieChart)
        let chart18 = am4core.create(chartDiv18.current, am4charts.PieChart)


        let chartData6 = []
        let chartData12 = []
        let chartData18 = []
        miles6.map((v) => {
          let obj = { [`${v.miles}`]: v.criteria, criteria: properties[v.value], color: am4core.color(v.color), percent: ((properties[v.value] / (properties['sixMilesViews'] + properties['sixMilesConversions'] + properties['sixMilesClicks'])) * 100).toFixed(1)}
          chartData6.push(obj)
          return chartData6
        })

        chart6.data = chartData6

        miles12.map((v) => {
            let obj = { [`${v.miles}`]: v.criteria, criteria: properties[v.value], color: am4core.color(v.color), percent: ((properties[v.value] / (properties['twelveMilesViews'] + properties['twelveMilesConversions'] + properties['twelveMilesClicks'])) * 100).toFixed(1)}
          chartData12.push(obj)
          return chartData12
        })

        chart12.data = chartData12

        miles18.map((v) => {
            let obj = { [`${v.miles}`]: v.criteria, criteria: properties[v.value], color: am4core.color(v.color), percent: ((properties[v.value] / (properties['eighteenMilesViews'] + properties['eighteenMilesViews'] + properties['eighteenMilesViews'])) * 100).toFixed(1)}
          chartData18.push(obj)
          return chartData18
        })

        chart18.data = chartData18 

        // Add and configure Series
        createPieSeries('criteria', '6miles', chart6)
        createPieSeries('criteria', '12miles', chart12)
        createPieSeries('criteria', '18miles', chart18) 


    })
    
    
    return (
        <div className={open? classes.container : classes.hidden}>
            <div className={classes.header}>
                <PlaceOutlined />
                <span className={classes.title}>{label} - {zip}</span>
            </div>
            <Divider />
            <div className={classes.header}>
                <div className={classes.wrapper}>
                    <span className={classes.subTitle}>6 miles</span>
                    <div id={chartDiv6.current} className={classes.wrapper}></div>
                </div>
                <div className={classes.wrapper}>
                    <span className={classes.subTitle}>12 miles</span>
                    <div id={chartDiv12.current} className={classes.wrapper}></div>
                </div>
                <div className={classes.wrapper}>
                    <span className={classes.subTitle}>18 miles</span>
                    <div id={chartDiv18.current} className={classes.wrapper}></div>
                </div>
            </div>
        </div>
    )
}