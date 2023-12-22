const arr=['jayesh','darshan','honey']
const arr2=['shiv','dixit','sagar']
const all_new_heros=[...arr, ...arr2]
console.log(all_new_heros) //spread operator


//same thing we can archive using concetationation but spread operator is good option for use.
 array1 = [1, 2, [3, 4, [5, 6]]];
const another = array1.flat(Infinity);
console.log(another);
