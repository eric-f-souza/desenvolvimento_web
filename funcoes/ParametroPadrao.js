// estrateja um para gerar um valor padrão.
function soma01(a, b, c){
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}

console.log(soma01(), soma01(3), soma01(1,2,3),soma01(0,0,0));//no 0 ele acaba assumindo o valor padrao


//Estrategia 2, 3 e 4 para gerar valor padrão:
function soma02(a,b,c){
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;  
    c = isNaN(c) ? 1 : c;  
    return a + b + c
}

console.log(soma02(), soma02(3), soma02(1, 2, 3), soma02(0, 0, 0));

// Valor padrão do es2015
function soma03(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma02(), soma02(3), soma02(1, 2, 3), soma02(0, 0, 0));