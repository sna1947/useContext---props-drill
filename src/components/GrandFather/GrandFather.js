import React from 'react';
import Aunti from '../Aunti/Aunti';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const GrandFather = (props) => {
    const { house } = props;
    return (
        <div >
            <h2>Grand father</h2>
            <p> house: {house} </p>
            <div style={{ display: 'flex', backgroundColor: 'orange' }}>
                <Father house={house} />
                <Uncle house={house} />
                <Aunti house={house} />
            </div>

        </div>
    );
};

export default GrandFather;