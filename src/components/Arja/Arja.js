import React, { useContext } from 'react';
import { RingContext } from '../../App';

const Arja = () => {        // useContext......

    const [ornaments, house] = useContext(RingContext);
    return (
        <div style={{ backgroundColor: 'lightgrey' }}>
            <h1>Arja</h1>
            <p>{ornaments}</p>
            <br />
            <p>House: {house}</p>
        </div>
    );
};

export default Arja;