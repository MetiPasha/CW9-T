//q5

// const numbers = [25, 80, 45];
// const [small, mid, big] = numbers.sort((a,b)=> a - b);


// const result = {
//     small,
//     mid,
//     big
// };
// console.log(result);


//q6

// const listStudent = [
//     {name: "Ali", grade:[19,15,6,13]},
//     {name: "Amir", grade:[20, 13, 16, 18]},
//     {name: "Hashem", grade:[16, 15, 18, 19]}
// ];

// const result = listStudent.map(({name, grade})=> ({
//     name, 
//     avg : grade.reduce((sum, grades) => sum + grades, 0) / grade.length
// }));

// console.log(result);


//q7

// const company = {
//     name: "Tech Corp",
//     employees: [{
//         name: "John", 
//         department: {
//             name: "Engineering",
//             location: "Building A"
//         }
//     },
//     {
//         name: "Jane",
//         department: {
//             name: "Marketing",
//             location: "Building B"
//         }
//     }
// ]
// };

// const info = company.employees.map(({name, department:{name: department}}) =>({
//     name,
//     department
// }))
// console.log(info);

//q8

// const  foods = ["Burger, Pizza, Sushi, Sezar"];
// const drink = ["Soda", "Lemonade", "Sprite", "Sperso"];

// const merging = [...foods, ...drink];
// console.log(merging);


//q9
// const nestedArray = [1, [2, 3], [4, [5, 6]]];

// const flatern = [];

// for(const element of nestedArray){
//     flatern.push(...element);

// }
// console.log(flatern);

//q10
