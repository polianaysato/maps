
import { Grid } from '@material-ui/core'
import poiSites from "../../data/POI.json"
import states from "../../data/us-states.json"
import { Mapbox } from "../Mapbox"
import { Popup } from "../../components/Popup"



export const UnclusteredStates = () => {

    return (


        <Grid container xs>
            <Mapbox geoJson={states} poi={poiSites} Popup={Popup}/>
        </Grid>
    )
}
