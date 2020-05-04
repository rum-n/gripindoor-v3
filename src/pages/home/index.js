import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './styles.css';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './tileData';

const cities = [];

const gymCities = () =>{
    for (let i = 0; i < tileData.length; i++) {
        cities.push(tileData[i].address);
    }
};
gymCities();

const Home = () => {
    const fade = useSpring({opacity: 1, from: {opacity: 0}, delay: 400})

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    
    const handleChange = event => {
       setSearchTerm(event.target.value);
     };

    useEffect(() => {
       const results = cities.filter(city =>
         city.toLowerCase().includes(searchTerm)
       );
       setSearchResults(results);
     }, [searchTerm]);

    return (
        <animated.div style={fade}>
            <h1 className='title'>Indoor climbing, everywhere</h1>
            <h2>All your favourite climbing gyms, no matter where you go.</h2>
            <h2 className='subheading'>The List</h2>
            <h3>Can't find your local gym? <br/> Let us know and we'll add it!</h3>
            <TextField 
                id="filled-basic" 
                label="Search for your city" 
                variant="filled" 
                value={searchTerm}
                onChange={handleChange}
            />
            <Grid 
                className="gymList"
                container 
                spacing={5}
                direction="row"
                justify="center"
                alignItems="center">
                <Grid  
                    item
                    xs={12}
                >
                    <GridList 
                        cellHeight={200}  
                        cols={4}>
                            {searchResults.map((tile) => (
                            <GridListTile key={tile.img}> 
                            <img 
                                src={tile.img} 
                                alt={tile.title}
                            />
                                <GridListTileBar
                                    title={tile.title}
                                    subtitle={tile.address}
                                    actionIcon={
                                        <IconButton 
                                            aria-label={`info about ${tile.title}`} 
                                            style={{color: 'rgba(255, 255, 255, 0.54)'}}>
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </GridListTile>
                            ))}
                    </GridList>
                </Grid>
            </Grid>
        </animated.div>
    );
}

export default Home;
