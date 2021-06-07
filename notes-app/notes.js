const fs = require('fs');

const getNotes = function(){


}

const addNote = function(title, body)
{
    let notes = loadNotes();
    let currentNotes = notes === undefined ? [] : notes;
    let newNote = {
        title: title,
        body: body
    }
    if(currentNotes.find(note => note.title === title) === undefined) {
        currentNotes.push(newNote);
        saveNotes(currentNotes);
    }
    else{
        console.log('Note already exists in lsit');
    }
}

const loadNotes = function (){
    try {
        const fileDataBuffer = fs.readFileSync('notes.json');
        return JSON.parse(fileDataBuffer.toString());
    }
    catch (e) {
       // console.log(e);
        return [];
    }

}



const saveNotes = function (notes){
        fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const removeNote = function(title){
    let currentNotes = loadNotes();
    let newNotes = currentNotes.filter(item => item.title !==  title);
    console.log(`removing note ${title}`)
    saveNotes(newNotes);

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
};
