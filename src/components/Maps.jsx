import GoogleMapReact from "google-map-react";
import { useState } from "react";

import styles from "../styles/components/Maps.module.css"
import Marker from "./Marker";

export default function Maps(props){
    const [mapInfo, setMapInfo] = useState({
        center : {
            lat: -3.7435588,
            lng: -38.5777024
        },
        zoom: 16
    })
    return (
        <div className={styles.mapContainer}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLEAPI_KEY }}
            defaultCenter={mapInfo.center}
            defaultZoom={mapInfo.zoom}
            >
            <Marker
                lat={-3.7435463795856236}
                lng={-38.575455843508614}
                text="Consultec jr"
                color="red"
            />
            
            </GoogleMapReact>
      </div>
    )    
} 