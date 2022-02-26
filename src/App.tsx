import React from "react";
import "./styles/App.css";
import "./styles/Fab.css";
import Routes from "./routes";
import { MapProvider } from "./context/MapContext";

export default function App() {
  return (
    <MapProvider>
      <Routes />
    </MapProvider>
  );
}
