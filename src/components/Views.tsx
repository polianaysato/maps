import React, { ReactElement } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    position: "absolute",
    zIndex: 1000,

    right: "28px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
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
    fontWeight: 'bold',
    fontFamily: 'Nunito Sans, sans-serif',
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
    width: "100%",
    height: "15px",
    display: "block",
  },
  block: {
    display: "block",
    fontSize: 12,
    fontFamily: "SFProDisplay-Regular, Helvetica, Arial, sans-serif",
    color: "#050505",
  },
  circleStroke: {
    width: "4px",
    height: "4px",
    display: "block",
  },
  top: {
    top: "28%",
  },
});

interface Props {
  title: string;
  color: Array<string>;
  poi: Array<string>;
}
function Views({ title, color, poi }: Props): ReactElement {
  const classes = useStyles();

  return (
    <>
      <Typography className={classes.block} gutterBottom>
        {title}
      </Typography>
      <Grid container xs className={classes.flex}>
        {color &&
          color[0] &&
          color.map((item: string, index: number) => {
            return (
              <Grid item xs>
                <Typography
                  className={classes.circle}
                  style={{ backgroundColor: item }}
                ></Typography>
                <Typography className={classes.label}>{Number(poi[index]) !== 0 ? `< ${poi[index]}` : poi[index]}</Typography>
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}

export default Views;
