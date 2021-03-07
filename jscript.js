// defining a function expression
// const square= function(x){
//     return (x * x);
// };
// console.log(square(12));

// no parameters
//const makenoise= function(){
    //console.log("Pling!");
//     return("Pling");       
// };
//makenoise();
//console.log(makenoise());

//two parameters
// const power= function(base, exponent){
//     let result= 1;
//     for (let count= 0; count < exponent; count++) {
//         result *= base;
//     }
//     return(result);
// }
//     console.log(power(2, 10));

//bindings and scopes
// let x= 10;
// if (true){
//     let y= 20;
//     var z= 30;
//     console.log(x + y + z);
// }
//     console.log(x + y + z); //-> y is not defined - outside scope of function!

    //let n= 10;
//    const halve= function(n) {
        //let n= 10;
//         return n / 2;
// };
//      let n= 10;                 //cannot be seen by function
    //console.log(halve(100));
    // console.log(halve(10));
    // console.log(n);             //cannot be seen by function only sees let n= 10;

//nested scope and lexical binding
// const hummus= function(batches) {                   //factor changed to batches - more logical to me!
//     const ingredient= function(amount, unit, name){
//         let ingredientAmount= amount * batches;
//         if(ingredientAmount > 1) {
//             unit += 's';
//         }
//         console.log(`${ingredientAmount} ${unit} ${name}`);
//     };
//         ingredient( 1, "can", "chickpeas");
//         ingredient( 0.25, "cup", "tahini");
//         ingredient( 0.25, "cup", "lemon juice");
//         ingredient( 1, "clove", "garlic");
//         ingredient( 2, "tablespoon", "olive oil");
//         ingredient( 0.5, "teaspoon", "cumin");
// };
//         hummus(5);




