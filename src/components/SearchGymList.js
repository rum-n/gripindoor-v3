import React, { useState } from 'react';
import './styles.css';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from './tileData';

const SearchGymList = () => {

    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState(tileData);

    const excludeColumns = ["img", "email"];

    const handleChange = value => {
        setSearchText(value);
        filterData(value);
      };

    const filterData = (value) => {
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === "") setData(tileData);
        else {
          const filteredData = tileData.filter(item => {
            return Object.keys(item).some(key =>
              excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
            );
          });
          setData(filteredData);
        }
      }

    return (
        <div>
            <TextField 
                id="filled-basic" 
                label="Search for your city" 
                variant="filled" 
                value={searchText}
                onChange={e => handleChange(e.target.value)}
            />
            <Grid 
                className="gymList"
                container 
                spacing={5}
                direction="row"
                justify="center"
                alignItems="center" >
                <Grid  
                    item
                    xs={12} >
                    <GridList 
                        cellHeight={200}  
                        cols={4} >
                            {data.map((tile) => (
                            <GridListTile key={tile.img}> 
                            <img 
                                src={tile.img} 
                                alt={tile.title} />
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
        </div>
    );
}

export default SearchGymList;
