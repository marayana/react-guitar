import { useState } from 'react';
import GuitarBody from './GuitarBody.js';
import Fretboard from './Fretboard.js';

function Guitar(){

    const [currFrets, setCurrFrets] = useState([0,0,0,0,0,0]);

    function updateCurrFrets(string, fret, shouldToggle){
        let newFrets = [...currFrets];
        newFrets[string] = shouldToggle ? newFrets[string] * -1 : fret;
        setCurrFrets(newFrets);
    }

    return (
        <div className="guitar">
            <GuitarBody
                currFrets={currFrets}
            />
            <Fretboard
                currFrets={currFrets}
                updateCurrFrets={updateCurrFrets}
            />
        </div>
    )
}

export default Guitar;
