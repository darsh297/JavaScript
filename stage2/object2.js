const obj1={1:'a',2:'b',3:'c'}
const obj2={4:'a',5:'b',6:'c'}
const obj3=Object.assign({},obj1,obj2)//concatination 
console.log(obj3)
/* ------------------------------------------ */

const obj4={9:'a'}
const obj5={10:'b'}
const obj6=Object.assign({},obj4,obj5)
console.log(obj6)

/*********************************************/

const tinderuse={}

tinderuse.Id="abc1234"
tinderuse.userName="Kishan"
console.log(tinderuse)

const regularuser=
{
    email:"darshan@google.com",
    fullnmae:{
        firstname: "Darshan",
        lastname: "Bharatbhai"

    }
}

console.log(regularuser.fullnmae.lastname)
console.log(Object.keys(tinderuse)) // access value of keys of object 
console.log(Object.values(tinderuse)) //using this we can easily access value of object 