// defining a function expression
const square= function(x){
    return (x * x);
};
console.log(square(12));

// parameters
const makenoise= function(){
    console.log("Pling!");
};
makenoise();

const power= function(base, exponent){
    let result= 1;
    for (let count= 0; count < exponent; count++) {
        result *= base;
    }
    return; //result;
}
    console.log(power(2, 10));

