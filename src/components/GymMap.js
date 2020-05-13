import React, { useState } from 'react';
import './styles.css';
import tileData from './tileData';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

const GymMap = ({match}) => {
    const [data] = useState(tileData);
    // const currentGym = data.filter(gym => gym.title === match.params.id)
    // const classes = useStyles();
    const provider = new OpenStreetMapProvider();

    const searchControl = new GeoSearchControl({
        provider: provider,
        showMarker: true
    });
    const map = new L.Map('map');

    return (
        map.addControl(searchControl)
    );
}

export default GymMap;
