import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../styles/Legend.css";
import Views from "./Views";
import { Divider, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 290,
    position: "absolute",
    zIndex: 1000,
    top: "35%",
    right: "11px",
    width: 290
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    fontFamily: 'Nunito Sans, sans-serif',
    color: "#050505",
    paddingTop: 8,
  },

  subTitle: {
    fontSize: 12,
    fontFamily: 'Nunito Sans, sans-serif',
    color: "#050505",
    margin: "0px 0px 4.2px",
  },

  secondTitle: {
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    fontFamily: 'Nunito Sans, sans-serif',
    color: "#050505",
    padding: "2em 0 0 0",
  },
  pos: {
    marginBottom: 12,
  },

  span: {
    display: "block",
    float: "left",
    height: 15,
    width: 34,
    textAlign: "center",
    fontSize: 9,
  },

  label: {
    display: "block",
    height: 15,
    width: 34,
    textAlign: "center",
    fontSize: 9,
    fontWeight: 'bold',
    fontFamily: 'Nunito Sans, sans-serif',
  },
  flex: {
    display: "flex",
    margin: "8px 0",
  },
  circle: {
    borderRadius: "100%",
    width: "20px",
    height: "20px",
    display: "block",
  },
  block: {
    display: "block",
  },
  circleStroke: {
    borderRadius: "100%",
    width: "4px",
    height: "4px",
    display: "block",
  },
  top: {
    top: "28%",
  },
  margin: {
    marginTop: "0.5rem",
    marginBottom: "0.5rem",
  },
  svg: {
    marginRight: 20,
    width: 25,
    height: 25,
  },
});

interface Props {
  type: string;
  colorScheme: Array<any>;
  steps: Array<any>;
  unclusteredImg: string;
  unclusteredPoint: string;
  poiViews6Miles: Array<string>;
  poiColor6Miles: Array<string>;
  poiViews12Miles: Array<string>;
  poiColor12Miles: Array<string>;
  poiViews18Miles: Array<string>;
  poiColor18Miles: Array<string>;
  clusterImg: string;
  clusters: string;
  pointCount: string;
}
const Legend = ({
  type,
  colorScheme,
  steps,
  pointCount,
  poiViews6Miles,
  poiColor6Miles,
  poiViews12Miles,
  poiColor12Miles,
  poiViews18Miles,
  poiColor18Miles,
}: Props) => {
  const classes = useStyles();

  const renderContent = () => {
    if (type === "dots") {
      return (
        <>
          <CardContent>
            <Grid container xs className={classes.flex}>
              {colorScheme.map((item: any, index: number) => {
                return (
                  <Grid item xs>
                    <Typography
                      className={classes.span}
                      style={{ backgroundColor: item }}
                    ></Typography>
                    <Typography className={classes.label}>{steps[index]}</Typography>
                  </Grid>
                );
              })}
            </Grid>
          </CardContent>
          <CardContent>
            <Typography className={classes.secondTitle} gutterBottom>
               POI Radius
            </Typography>
            <Divider />
          </CardContent>
          <CardContent>
            <Views
              poi={poiViews6Miles}
              color={poiColor6Miles}
              title="6 miles"
            />
            <Views
              poi={poiViews12Miles}
              color={poiColor12Miles}
              title="12 miles"
            />
            <Views
              poi={poiViews18Miles}
              color={poiColor18Miles}
              title="18 miles"
            />
          </CardContent>
        </>
      );
    }
  };
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          Points of Interest
        </Typography>
        <Divider />
        <Typography className={classes.subTitle} gutterBottom>
          {pointCount}
        </Typography>
      </CardContent>

      {renderContent()}
    </Card>
  );
};

export default Legend;
