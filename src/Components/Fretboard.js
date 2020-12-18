import React from 'react';
import MuteBtns from './MuteBtns.js';
import FretboardBg from './FretboardBg.js';
import FretMarkers from './FretMarkers.js';

function Fretboard({ currFrets, updateCurrFrets }){

    return (
        <div className="fretboard-container">
            <MuteBtns
                currFrets={currFrets}
                updateCurrFrets={updateCurrFrets}
            />
            <FretboardBg />
            <FretMarkers
                currFrets={currFrets}
                updateCurrFrets={updateCurrFrets}
            />
        </div>
    )
}

export default Fretboard;
