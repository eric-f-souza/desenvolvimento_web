//par nome/valor
const saudacao = "OPA"//contexto léxico 1

function exec(){
    const saudacao = "Fala"//contexto léxico 2
    return saudacao;
}

//Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: "pedro",
    idade: 32,
    peso: 90,
    endereco: {
        logadouro:"Uma rua ai",
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());