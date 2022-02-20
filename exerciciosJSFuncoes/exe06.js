// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.
//https://ead.pucpr.br/blog/juros-simples-compostos-formula?utm_feeditemid=&utm_device=c&utm_term=&utm_source=google&utm_medium=ppc&utm_campaign=&hsa_cam=13544381736&hsa_grp=&hsa_mt=&hsa_src=x&hsa_ad=&hsa_acc=1503120607&hsa_net=adwords&hsa_kw=&hsa_tgt=&hsa_ver=3&gclid=CjwKCAiA9aKQBhBREiwAyGP5lYw2Qnav-TZglEPLaNtwtBhfwbL1MkpVrDr_LN_Pq3bIAAotkfs7SRoCo6YQAvD_BwE

//Juros simples J= C x I X T (onde C= Capital inicial, I= Taxa de Juros, T = Tempo de aplicação) depois soma C + J 
function jurosSimples(startingCapital,interestRate,timeAplication){
    let fees = startingCapital * (interestRate/ 100) * timeAplication;
    let finalyValor = startingCapital + fees;
    let finalyValorFormatted = finalyValor.toLocaleString(`pt-BR`,{style:`currency`, currency: `BRL`});
    return {finalyValorFormatted, timeAplication}
}

//Juros composto M = C x(1+ I)º  depois j= M - C(onde M = montante, C = capital aplicado ou valor inicial, I = taxa de juros composto, º = tempo de aplicação)
function jurosComposto(startingCapital, interestRate, timeAplication){
    let finalMoney = startingCapital * Math.pow((1 +(interestRate/100)), timeAplication);
    finalMoney = finalMoney.toLocaleString(`pt-BR`, {style: `currency`, currency: `BRL`})
    return {finalMoney, timeAplication}
}



let calculo = (jurosSimples(1500.00, 1.5, 12))
console.log(`Com a aplicação de juros simples, valor final no periodo de ${calculo.timeAplication} é de  ${calculo.finalyValorFormatted}`);


let composto = jurosComposto(1500.00, 1.5, 12)
console.log(`Com a aplicação de juros composto, valor final no periodo de ${composto.timeAplication} é de  ${composto.finalMoney}`)
