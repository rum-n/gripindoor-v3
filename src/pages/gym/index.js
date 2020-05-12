import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import './styles.css';
import tileData from './../../components/tileData';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(15),
        width: theme.spacing(70),
        height: theme.spacing(80),
        color: 'white',
        background: '#474e5d',
        textAlign: 'left'
      },
    },
  }));

const GymDetails = ({match}) => {
    const fade = useSpring({opacity: 1, from: {opacity: 0}, delay: 400})
    const [data] = useState(tileData);

    const currentGym = data.filter(gym => gym.title === match.params.id)
    // console.log(Object.values(currentGym));

    const classes = useStyles();

    return (
        <animated.div style={fade} className={classes.root}>
            <Paper elevation={3}>
                <div className='gymInfo'>
                    <img className='gymImg' src={currentGym[0].img} alt={currentGym[0].title} />
                    <h1>{match.params.id}</h1>
                    <p>{currentGym[0].address}</p>
                    <p>{currentGym[0].country}</p>
                    <a href={currentGym[0].website}>{currentGym[0].website}</a>
                    <p>{currentGym[0].email}</p>
                </div>
            </Paper>
        </animated.div>
    );
}

export default GymDetails;
