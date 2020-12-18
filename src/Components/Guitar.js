import React, { useState } from 'react';
import GuitarBody from './GuitarBody.js';
import Fretboard from './Fretboard.js';

function Guitar(){

    const [currFrets, setCurrFrets] = useState([0,0,0,0,0,0]);

    return (
        <div className="guitar">
            <GuitarBody currFrets={currFrets} />
            <Fretboard />
        </div>
    )
}

export default Guitar;
