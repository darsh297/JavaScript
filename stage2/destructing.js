const course={
    coursename: "DSA",
    courseInstructor: "Babbar",
    coursePrice: '2000'
}
//This method is weidely used while you need to print multpp
const {courseInstructor: instructor}=course //suppose courseInstructor is very big, insted of that you declare it as "instructor"
const {coursePrice}=course
const {coursename}=course
console.log(coursename)
console.log(instructor)
console.log(coursePrice)
