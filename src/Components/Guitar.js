import React, { useState } from 'react';
import GuitarBody from './GuitarBody.js';

function Guitar(){
    const [currFrets, setCurrFrets] = useState([0,0,0,0,0,0]);

    return (
        <div className="guitar">
            <GuitarBody currFrets={currFrets}/>
        </div>
    )
}

export default Guitar;
