import { guitar } from './audiosynth.js';

function getNote(string, fret){
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const open = [4,9,14,19,23,28];
    const index = open[string] + fret;
    const note = notes[(index)%12];
    const octave = Math.floor((index)/12) + 2;
    return [note, octave]
}

function isMuted(fret){
    return fret < 0 || Object.is(fret, -0);
}

function playNote(string, fret){
    const [note, octave] = getNote(string, fret);
    const duration = 1.5;
    guitar.play(note, octave, duration)
}

function playGuitarBody(currFrets, currStrings){
    currFrets.forEach((f,s) => currStrings.includes(s) && !isMuted(f) && playNote(s,f))
}

export { playGuitarBody, playNote, isMuted }
