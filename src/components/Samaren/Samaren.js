import React from 'react';
import Arja from '../Arja/Arja';
import Soumita from '../Soumita/Soumita';

const Samaren = (props) => {
    const { house } = props;
    return (
        <div >
            <h1>samaren</h1>
            <p>house: {house}</p>
            <div style={{ display: 'flex' }}>
                <Soumita />
                <Arja house={house} />
            </div>

        </div>
    );
};

export default Samaren;