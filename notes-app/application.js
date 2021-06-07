const chalk = require('chalk');
const yargs = require('yargs');
let noteHandlers = require('./notes.js');

let log = console.log;

log(chalk.green.inverse.bold('Success'));
log(chalk.blue.inverse.bold('HELP!'));

//log(process.argv);
log(yargs.argv);
//const command = process.argv[2];

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        //log('Adding a new note', argv);
        log(` Title: ${argv.title} \r\n Body: ${argv.body}`);
        noteHandlers.addNote(argv.title, argv.body);
    }
});
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: false,
            type: 'string'
        }
    },
    handler: function(argv) {
        //log('Removing a new note');
        noteHandlers.removeNote(argv.title);
    }
});
yargs.command({
    command: 'list',
    describe: 'List a new note',
    handler: function(){
        log('Listing all notes');
    }
});
yargs.command({
    command: 'read',
    describe: 'Read a new note',
    handler: function(){
        log('Reading note');
    }
});


yargs.parse();
//log(yargs.argv);

// if(command === 'add'){
//     log('Adding Note!');
// }
// else if(command === 'remove')
// {
//     log('Removing note!');
// }

