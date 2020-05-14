import React, { useState, useEffect } from 'react';
import './styles.css';
import tileData from './tileData';
import Iframe from 'react-iframe';
import { makeStyles } from '@material-ui/core/styles';
import GymDetails from './../pages/gym/index';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'no-wrap',
      flexDirection: 'row',
      '& > *': {
        margin: theme.spacing(10),
        width: theme.spacing(70),
        height: theme.spacing(80),
        color: 'white',
        background: '#474e5d',
        textAlign: 'left'
      },
    },
  }));

const GymMap = () => {
    const [data, setData] = useState([]);
    const classes = useStyles();
    // const gymLocation = tileData.filter(gym => gym.title === match.params.id)

    const fetchCoordinates = async () => {
        const gymAddress = await fetch(
        //   `https://nominatim.openstreetmap.org/search?q=${gymLocation[0].address}&format=geojson`,
          `https://nominatim.openstreetmap.org/search?q=Ohlauer Str. 38, 10999 Berlin&format=geojson`,
          {
            mode: 'cors',
            // credentials: 'include',
            cache: 'no-cache',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
          }
        );
        const gyms = await gymAddress.json();
        const bbox = (gyms.features[0].bbox).toString();
        setData(bbox);
      };

      useEffect(() => {
        fetchCoordinates();
      });

    return (
        <Iframe url={`https://www.openstreetmap.org/export/embed.html?bbox=${data}&amp;layer=mapnik&amp;marker=52.49514218025014%2C13.428629636764526`}
            width="450px"
            height="450px"
            className={classes.root}/>
    );
}

export default GymMap;
