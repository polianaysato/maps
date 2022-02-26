import React, { ReactElement } from "react";
// @ts-ignore
import { Animate } from "react-move";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../styles/index.css";

function CustomContentProgressbar({ children, otherProps }: any): ReactElement {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <div style={{ position: "absolute" }}>
        <CircularProgressbar {...otherProps} />
      </div>
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
}

type MyProps = {
  percentage: number;
  duration: number;
  easingFunction: any;
};

class ProgressBar extends React.Component<MyProps> {
  state = {
    isAnimated: false,
  };

  componentDidMount() {
    this.setState({
      isAnimated: true,
    });
  }

  render() {
    return (
      <Animate
        start={() => ({
          percentage: 0,
        })}
        update={() => ({
          percentage: [this.state.isAnimated ? this.props.percentage : 0],
          timing: {
            duration: this.props.duration * 1000,
            ease: this.props.easingFunction,
          },
        })}
      >
        {({ percentage }: any) => {
          const roundedPercentage = Math.round(percentage);
          return (
            <CustomContentProgressbar percentage={roundedPercentage}>
              <div style={{ fontSize: "1.5em" }}>{roundedPercentage}%</div>
            </CustomContentProgressbar>
          );
        }}
      </Animate>
    );
  }
  abstract: any;
}

export default ProgressBar;
