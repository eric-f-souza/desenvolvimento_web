function tratarErriELancar(erro){
     //throw new Error("...")
     throw 10
}

function imprimirNomeGritado(obj){
    try{
    console.log(obj.name.toUpperCase() + "!!!!")
}catch (e){
    tratarErriELancar(e)
}
}

const obj = {nome: "Roberto"}
imprimirNomeGritado(obj)