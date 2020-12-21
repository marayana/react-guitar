import React from 'react';
import MuteBtns from './MuteBtns.js';
import FretboardBg from './FretboardBg.js';

function Fretboard({ currFrets, updateCurrFrets }){

    return (
        <div className="fretboard-container">
            <MuteBtns
                currFrets={currFrets}
                updateCurrFrets={updateCurrFrets}
            />
            <FretboardBg />
        </div>
    )
}

export default Fretboard;
