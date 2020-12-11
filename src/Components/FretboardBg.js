import { fbSize, stringPositions, fretPositions } from '../utils/fretboardValues.js';

function FretboardBg(){

    const strings = stringPositions.map((pos, i) => {
        return (
            <line
                key={`string-${i}`}
                id={`string-${i}`}
                x1="0"
                y1={pos}
                x2={fbSize.width}
                y2={pos}
                stroke="#ddd"
                strokeWidth="2"
            />
        )
    })

    const frets = fretPositions.map((pos, i) => {
        return (
            <line
                key={`fret-${i}`}
                id={`fret-${i}`}
                x1={pos}
                y1="0"
                x2={pos}
                y2={fbSize.height}
                stroke="#b93"
                strokeWidth="3"
            />
        )
    })

    const nut = <rect
        x="0"
        y="0"
        width={fretPositions[0]}
        height={fbSize.height}
        fill="rgba(0,0,0,0.5)"
    />

    const dotFrets = [3, 5, 7, 9, 12, 15, 17, 19];
    const dots = dotFrets.map((fret,i) => {
        if (fret === 12){
            return (
                <g key={`dot-${fret}`} id={`dots-${fret}`}>
                    <circle
                        cx={(fretPositions[fret]+fretPositions[fret-1])/2}
                        cy={2 * fbSize.height/6}
                        r="3"
                        fill="#a98"
                    />
                    <circle
                        cx={(fretPositions[fret]+fretPositions[fret-1])/2}
                        cy={4 * fbSize.height/6}
                        r="3"
                        fill="#a98"
                    />
                </g>
            )
        }
        return (
            <circle
                key={`dot-${fret}`}
                 id={`dot-${fret}`}
                 cx={(fretPositions[fret]+fretPositions[fret-1])/2}
                 cy={fbSize.height/2}
                 r="3"
                 fill="#a98"
             />
        )
    })

    return (
        <div className="fretboard-bg">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox={`0 0 ${fbSize.width} ${fbSize.height}`}
                width={`${fbSize.width}`}
                height={`${fbSize.height}`}
            >
                {strings}
                {nut}
                {frets}
                {dots}
            </svg>
        </div>
    )
}

export default FretboardBg;
