person={
    name:"Ahmed",
    age:24,
}
const personJson=JSON.stringify(person)
const fs=require('fs')
fs.writeFileSync('persons.json',personJson)
console.log(fs.readFileSync('persons.json').toString())
const personObj=JSON.parse(personJson)
console.log(personObj)
personObj.name="Mohammed"
personObj.age=30
console.log(personObj)
const secJosn=JSON.stringify(personObj)
fs.writeFileSync('persons.json',secJosn)
