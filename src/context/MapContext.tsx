import React, { createContext, useState, useEffect } from "react";

interface Feature {
  properties: Properties;
}

interface Properties {
  density: number;
}

type MapType = {
  colorScheme: Array<string>;
  steps: Array<number>;
  poiViews6Miles: Array<number>;
  poiColor6Miles: Array<string>;
  poiViews12Miles: Array<number>;
  poiColor12Miles: Array<string>;
  poiViews18Miles: Array<number>;
  poiColor18Miles: Array<string>;
};

type PropsMapContext = {
  state: MapType;
  setState: any;
  getColor: Function;
  mapStyle: Function;
};

const DEFAULT_VALUE = {
  state: {
    colorScheme: [""],
    steps: [0],
    poiViews6Miles: [0],
    poiColor6Miles: [""],
    poiViews12Miles: [0],
    poiColor12Miles: [""],
    poiViews18Miles: [0],
    poiColor18Miles: [""],
  },
  setState: () => {},
  getColor: () => {},
  mapStyle: () => {},
};

const MapContext = createContext<PropsMapContext>(DEFAULT_VALUE);

const MapProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  function getColor(d: number) {
    return d > 500000
      ? "#0D47A1"
      : d > 250000
      ? "#1565c0"
      : d > 200000
      ? "#1976d2"
      : d > 150000
      ? "#1e88e5"
      : d > 100000
      ? "#42a5f5"
      : d > 50000
      ? "#64b5f6"
      : d > 5000
      ? "#bbdefb"
      : "#e3f2fd";
  }

  function mapStyle(feature: Feature) {
    return {
      weight: 1,
      opacity: 1,
      color: "white",
      dashArray: "1",
      fillOpacity: 0.7,
      fillColor: getColor(feature.properties.density),
    };
  }
  return (
    <MapContext.Provider
      value={{
        state,
        setState,
        getColor,
        mapStyle,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
export { MapProvider };
export default MapContext;
