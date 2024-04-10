import React, { useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon from "../../images/icon-location.svg";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import styles from "./map.module.scss";

export default function Map({ coordinates }) {
  const marker = new L.icon({ iconUrl: markerIcon });
  let state = {
    keyMAP: Math.random(),
  };
  console.log({ coordinates });
  return (
    <MapContainer
      key={state.keyMAP}
      center={[coordinates.lat, coordinates.lng]}
      zoom={18}
      className={styles.container}
    >
      <TileLayer
        attribution="Google Maps"
        url="https://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}"
      >
        <Marker
          position={[coordinates.lat, coordinates.lng]}
          icon={marker}
        ></Marker>
      </TileLayer>
    </MapContainer>
  );
}
