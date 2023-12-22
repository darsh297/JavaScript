const demoString="Chudasama"
const demo=demoString.substring(0,2)
const demo1=demoString.slice(-8,3)
const name="  Darshan  "
const url="darshan%20chudasama"
const spliltS="Chudasama-Darshan"

console.log(demo)
console.log(demo1)
console.log(name)
console.log(name.trim()) 
console.log(url.replace('%20',' '))
console.log(spliltS.split('-'))//here split performe sepration based on "-" and convert string into array


