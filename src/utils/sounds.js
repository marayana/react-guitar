import { guitar } from './audiosynth.js';

function createGuitarNotes(){
    const arr = [];
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    for (let octave = 2; octave < 7; octave++){
        notes.forEach(note => arr.push(`${note}-${octave}`))
    }
    return arr.slice(4)
};

const guitarNotes = createGuitarNotes();

function getNote(string, fret){
    const open = [0,5,10,15,19,24];
    const index = open[string] + fret;
    return guitarNotes[index]
}

function playNote(string, fret){
    const [note, octave] = getNote(string, fret).split('-');
    const duration = 1.5;
    guitar.play(note, octave, duration)
}

function isMuted(fret){
    return fret < 0 || Object.is(fret, -0);
}

function playGuitarBody(currFrets, currStrings){
    currFrets.forEach((f,s) => currStrings.includes(s) && !isMuted(f) && playNote(s,f))
}

export { playGuitarBody }
