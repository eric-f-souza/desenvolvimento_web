// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type
function comparateValue(a,b){
    let c = false;
    if(a == b && typeof a == typeof b){
        c = true;
    }
    return c;
}

console.log(comparateValue(3,3));
console.log(comparateValue(3,2));


//testando segundo metodo
function comparateValue02(a,b){
    if(a == b && typeof a == typeof b){
        return true;
    }else {
        return false;
    }

}

console.log(comparateValue02(3,3));
console.log(comparateValue02(3,2));

// solução desafio:

function myFunction(a, b) {
    return a === b;
  }
  //tenho que aprender a simplificar as paradas.