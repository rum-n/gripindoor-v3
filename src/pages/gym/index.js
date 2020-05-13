import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import './styles.css';
import tileData from './../../components/tileData';
import Iframe from 'react-iframe';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LanguageIcon from '@material-ui/icons/Language';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

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
                    <p><span><LocationOnIcon/></span>{currentGym[0].address}</p>
                    <p><span><LanguageIcon/></span><a href={currentGym[0].website}>{currentGym[0].website}</a></p>
                    <p><span><MailOutlineIcon/></span>{currentGym[0].email}</p>
                </div>
            </Paper>
            <Iframe url="https://www.openstreetmap.org/export/embed.html?bbox=13.45878839492798%2C52.5086793470659"
              width="450px"
              height="450px"
              className={classes.root}/>
        </animated.div>
    );
}

export default GymDetails;
