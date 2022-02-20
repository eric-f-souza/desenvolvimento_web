function teste01(num){
    if(num >7)
        console.log(num);

    console.log("fim");
}

teste01(6)
teste01(8)

function teste02(num){
    if(num >7); {//cuidado com o ; não usar nas estruturas de controle(so no final ne menor)
        console.log(num);
    }
}

teste02(6);
teste02(8);
