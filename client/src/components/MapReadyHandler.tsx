import React, { useEffect } from "react";
import L, { Map } from "leaflet";

interface MapReadyHandlerProps {
  whenReady: (map: Map) => void;
}

const MapReadyHandler: React.FC<MapReadyHandlerProps> = ({ whenReady }) => {
  useEffect(() => {
    const map = L.map("map"); // Adjust as necessary to get the correct map instance

    map.once("load", () => {
      whenReady(map);
    });

    return () => {
      map.off("load");
    };
  }, [whenReady]);

  return null; // This component does not render anything
};

export default MapReadyHandler;
