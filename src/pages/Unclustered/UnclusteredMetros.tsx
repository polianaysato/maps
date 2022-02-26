
import { Grid } from '@material-ui/core'
import poiSites from "../../data/POI.json"
import metro from "../../data/us-metro1.json";
import { Mapbox } from "../Mapbox"
import { Popup } from "../../components/Popup"



export const UnclusteredMetros = () => {

    return (
        <Grid container xs>
            <Mapbox geoJson={metro} poi={poiSites} Popup={Popup}/>
        </Grid>
    )
}
