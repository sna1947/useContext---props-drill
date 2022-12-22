import React from 'react';
import Pronab from '../Pronab/Pronab';
import Samaren from '../Samaren/Samaren';

const Father = (props) => {         //props drilling....
    const { house } = props;
    return (
        <div >
            <h2>father: sudhir kr halder</h2>
            <p>house:{house} </p>
            <div style={{ display: 'flex', backgroundColor: 'lightblue', }}>
                <Pronab house={house} />
                <Samaren house={house} />
            </div>

        </div>
    );
};

export default Father;