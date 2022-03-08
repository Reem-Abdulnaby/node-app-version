const fs=require('fs')
const addNotes=(title,body)=>{
    const notes=loadNotes()
    const duplicateNotes=notes.filter((obj)=>{
        return obj.title===title
    
    })
    console.log(duplicateNotes) 

        if(duplicateNotes.length==0){
            notes.push({
                title,
                body
            })
            saveNotes(notes)
            console.log("saved suuccessfully")
        }
        else{
            console.log("error")
        }
   
    

 }

const loadNotes= ()=>{
    try{
        const dataBuffer=fs.readFileSync('notes.json').toString()
        return JSON.parse(dataBuffer)
    }
    catch{
        return []
    }

}
const saveNotes=(notes)=>{
    const saveData=JSON.stringify(notes)
    fs.writeFileSync('notes.json',saveData)
}

const deletNotes=(title)=>{
    const notes=loadNotes()
    const notesToKeep=notes.filter((obj)=>{
        return obj.title!==title
    })
    console.log(notesToKeep)
    saveNotes(notesToKeep)
}
const readNotes=(title)=>{
    const notes=loadNotes()
    const note=notes.find((obj)=>{
        return obj.title===title
    })
    console.log(note)
    if(note)
    console.log(note.body)
    else
    console.log("not found")
}
const listNotes=()=>{
    const notes= loadNotes()
    notes.forEach((obj)=>{
        console.log(obj)
    })

}
module.exports={
    addNotes,
    deletNotes,
    readNotes,
    listNotes

}