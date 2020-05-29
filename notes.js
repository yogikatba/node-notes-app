const fs = require('fs')
const chalk = require('chalk')


const addNote = (title, body) =>{
    const notes = loadNotes()
    const dupli = notes.find((note)=> note.title === title)
    //debugger
    if(!dupli){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    }
    else{
        console.log(chalk.red.inverse('Note title is already taken!'))
    }
    
}

const readNote = title => {
    const notes = loadNotes()
    const find = notes.find(note => note.title === title)
    if(find){
        console.log(chalk.inverse(find.title))
        console.log(chalk.blue(find.body))
    }
    else console.log(chalk.red.inverse('Note not found'))
    
}

const removeNote = (title) => {
    const notes = loadNotes()
    const newNotes = notes.filter((note)=> note.title !== title)
    if(newNotes.length === notes.length)console.log(chalk.red.inverse('No note found!'))
    else{
        saveNotes(newNotes)
        console.log(chalk.green.inverse('Note removed!'))
    } 
}

const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes...'))
    notes.forEach(note => {
        console.log(note.title)
    })
}

const loadNotes = () => {
    try{
        const buffer = fs.readFileSync('notes.json')
        const dataJSON = buffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    //es6
    listNotes,
    readNote
}