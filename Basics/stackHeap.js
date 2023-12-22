

let userName="darshan"
let userName2=userName
userName2="Chudasama"
console.log(userName)
console.log(userName2)
//value store into stack,userName2 get copy of userName but while we are changing userName2 value at that time useName value not affected.

//Let's check Heap

let userOne=
{
    email: "userOne@gmail.com",
    upi : "Darshan"
}

let userTwo=userOne
userTwo.email="dc@gmail.com"

console.log(userTwo.email)
console.log(userOne.email)


//userOne email also change because it will go as refrence to the userTwo email and while er are changing userTwo email it autometically change uerOne email.
