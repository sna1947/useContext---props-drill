import React from 'react';

const Surja = (props) => {      // props drilling....
    const { house } = props;
    return (
        <div style={{ backgroundColor: 'yellow' }}>
            <h1>surja</h1>
            <p>house: {house}</p>
        </div>
    );
};

export default Surja;