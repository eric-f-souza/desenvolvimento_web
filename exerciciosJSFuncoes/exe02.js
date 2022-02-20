/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 *Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
 *Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
 *ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
 *triângulo).
*/

function typeTriangle(valor01,valor02,valor03){
    this.valor;
        if (valor01 == valor02 && valor02 == valor03){
        console.log("The triangle is Equilátero")
    }else if(valor01 == valor02 || valor02 == valor03 || valor01 == valor03){
        console.log("the triangle is Isóceles")
    }else{
        console.log("The Triangle is Escaleno")
    }
}
typeTriangle(3,3,3);
typeTriangle(2,2,3);
typeTriangle(1,2,3);