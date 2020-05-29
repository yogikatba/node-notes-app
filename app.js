const chalk = require('chalk')
const yargs = require('yargs')
const note = require('./notes')



yargs.command({
    command: 'add',
    describe: 'add a note',
    builder:{
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        note.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder:{
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        note.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'show the list',
    handler: ()=>{
        note.listNotes()
    }
})

yargs.command({
    command: 'read',
    description: 'read a note',
    builder:{
        title:{
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        note.readNote(argv.title)
    }
})

yargs.parse()

