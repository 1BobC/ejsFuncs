//comparison
// let total= 0, count= 1;
// while(count <= 10){
//     total =+ count;
//     count += 1;
// }
// console.log(total);

// versus - Python?
//console.log(sum(range(1, 10)));

//abstracting repetition
// for (let i= 0; i < 10; i++){
//     console.log(i);
// } 

//or can we abstract 'doing something n times'?
// function repeatLog(n){
//     for(let i= 0; i < n; i++){
//         console.log(i);
//     }
// }
//     repeatLog(22)

//this passes the action as a function value ??
// function repeat(n, action) {
//     for(let i=0; i < n; i++) {
//         action(i);
//     }
// }
//     repeat(3, console.log);

//create a function value on the spot instead of predetermined function above
// let labels= [];
// repeat(5, i => {
//     labels.push(`Unit ${i + 1}`);
// });    
//     console.log(labels);    //not working repeat() not 'defined'

//higher order functions - allow us to abstract over actions, not just values.
//eg function creating a new function
// function greaterThan(n) {
//     return m => m > n;
// }
// let greaterThan10= greaterThan(10);
// console.log(greaterThan10(11));

//And we can have functions that change other functions.
function noisy(f) {
    return(...args) => {
        console.log("calling with", args);
        let result= f(...args);
        console.log("called with", args, ", returned", result);
        return result;
    };
}
    noisy(Math.min)(4, 3, 2, 1);
    