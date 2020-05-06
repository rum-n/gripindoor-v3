import React from 'react';
import { useSpring, animated } from 'react-spring';
import SearchGymList from './../../components/SearchGymList';
import './styles.css';

const Home = () => {
    const fade = useSpring({opacity: 1, from: {opacity: 0}, delay: 400})

    return (
        <animated.div style={fade}>
            <h1 className='title'>Indoor climbing, everywhere</h1>
            <h2>All your favourite climbing gyms, no matter where you go.</h2>
            <SearchGymList />
            <h3>Can't find your local gym? <br/> Let us know and we'll add it!</h3>
        </animated.div>
    );
}

export default Home;
