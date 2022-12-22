import React from 'react';
import Sunu from '../Sunu/Sunu';
import Surja from '../Surja/Surja';
import Taniya from '../Taniya/Taniya';

const Pronab = (props) => {    // props drilling....
    const { house } = props;
    return (
        <div >
            <h1>Pronab</h1>
            <p>house: {house} </p>
            <div style={{ display: 'flex' }}>
                <Taniya />
                <Sunu />
                <Surja house={house} />
            </div>

        </div>
    );
};

export default Pronab;