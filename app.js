/*const fs=require('fs')
fs.writeFileSync('notes.txt', 'Heloo')
console.log(fs.readFileSync('notes.txt').toString())
const x=require('./data')
console.log(x.sum())*/

/*const validator=require('validator')
console.log(validator.isEmail("ahmed"))
console.log(validator.isEmail("ahmed@gmail.com"))*/


const notes = require('./notes')
const yargs=require('yargs')
yargs.command({
    command:'add',
    describe:'add note',
    builder:{
        title:{
            describe:'This is title in command',
            demandOption:true,
            type:"string"
        },
        body:{
            describe:"This is body in command",
            demandOption:true,
            type:"string"

        }
        
    },
    handler:(x)=>{
        
        notes.addNotes(x.title,x.body)
    }
})
yargs.command({
    command:'delet',
    describe:'remove note',
    builder:{
        title:{
            describe:'This is title in command',
            demandOption:true,
            type:'string'
        }
      
        
    },
    handler:(x)=>{
       notes.deletNotes(x.title)
    }
})
yargs.command({
    command:'list',
    describe:'listed note',
    handler:()=>{
        notes.listNotes()
    }
})
yargs.command({
    command:'read',
    describe:'read note',
    builder:{
        title:{
            describe:'This is title in command',
            demandOption:true,
            type:"string"
        }
      
    },
    handler:(x)=>{
     notes.readNotes(x.title)
    }
})
yargs.parse()