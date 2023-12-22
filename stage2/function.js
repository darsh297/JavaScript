function sayMyname(){
    console.log("Darshan")
    console.log("12")
    console.log("Bhavnagar")
}

sayMyname()


//function with argument passing 

function introduction(user)
{
    if(!user)
    {
        console.log("Please Enter UserName")
        return
    }
    return `${user},just logged in`
}
console.log(introduction())