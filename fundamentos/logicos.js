function compras(trabalho01, trabalho02){
    const comprarSorvete = trabalho01 || trabalho02;
    const compraTv50 = trabalho01 && trabalho02;
    //const comprarTv32 = !!(trabalho01^trabalho02) bitwise xor
    const compraTv32 = trabalho01 != trabalho02;
    const manterSaudavel = !comprarSorvete;

    return {comprarSorvete, compraTv50,compraTv32, manterSaudavel};

    }
    console.log(compras(false, false));
    console.log(compras(true, false));
    console.log(compras(true, true));
    console.log(compras(true, true));
      
