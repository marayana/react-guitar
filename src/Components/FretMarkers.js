import { useState } from 'react';
import { fbSize, fretPositions, stringPositions } from '../utils/fretboardValues.js';
import { playNote, isMuted } from '../utils/sounds.js';

function FretMarkers( {currFrets, updateCurrFrets }){

    const [string, setString] = useState(-1);
    const [fret, setFret] = useState(0);

    function showMarker(e){
        let s = Math.floor(6/fbSize.height * (fbSize.height - 1 - e.nativeEvent.offsetY));
        let f = fretPositions.findIndex(pos => e.nativeEvent.offsetX < pos);
        f = f === -1 ? 0 : f;
        setString(s);
        setFret(f);
    }

    function hideMarker(){
        setString(-1);
    }

    const fretMarkers = currFrets.map((f, i) => {
        if (!isMuted(f)){
            return (
                <circle
                    key={i}
                    cx={`${fretPositions[f] - 6}`}
                    cy={`${stringPositions[i]}`}
                    r="6"
                    fill="rgba(255,255,255,0.5)"
                    stroke="#fff"
                />
            )
        };
        return true;
    });

    const fretMarker = <circle
        cx={`${fretPositions[fret] - 6}`}
        cy={`${stringPositions[string]}`}
        r="6"
        fill="rgba(255,255,255,0.7)"
        stroke="#fff"
    />

    return (
        <div className="fret-markers">
            <svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 96" width="720" height="96"
                onClick={()=>{
                    playNote(string, fret);
                    updateCurrFrets(string, fret, false);
                }}
                onMouseMove={showMarker}
                onMouseLeave={hideMarker}
            >
            {fretMarkers}
            {string > -1 && fretMarker}
            </svg>
        </div>
    )

}

export default FretMarkers;
