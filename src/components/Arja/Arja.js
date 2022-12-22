import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Arja = () => {        // useContext......

    const ornaments = useContext(RingContext);
    return (
        <div style={{ backgroundColor: 'lightgrey' }}>
            <h1>Arja</h1>
            <p>{ornaments}</p>
        </div>
    );
};

export default Arja;