// 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).
// Obs.: O primeiro jogo não conta como novo recorde do melhor.
// Exemplo:
// String: “10 20 20 8 25 3 0 30 1”
// Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
// aconteceu no sétimo jogo.)

function athletePerformance(gamePerformance){
    let gamePoints = gamePerformance.split(";")
    let hitRecords = 0;
    let counter = 0;
    let worstScore = gamePoints[0];
    let bestScore = gamePoints[0];
    let worstGame = gamePoints[0];


    while (counter < gamePoints.length) {
        if( +gamePoints[counter] > +bestScore){
            bestScore = gamePoints[counter];
            hitRecords ++            
        }else if(+gamePoints[counter]< worstScore){
            worstScore = +gamePoints[counter];
            worstGame = counter +1;       
        }
        counter ++        
    }
    console.log(worstScore)
    console.log(hitRecords)
    console.log(bestScore)
    console.log(worstGame)
}

athletePerformance("10;20;20;08;25;3;0;30;1")
//athletePerformance("30;40;20;4;51;25;40;38;56;0")