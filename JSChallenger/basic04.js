function returnPartial(a){
    let c = a.length - 3
    const b = a.substring(c)
    //const b = a.substring(3)
    console.log(c)
    console.log(b)
    return b
}

let stringReturne = "abcdefgrfrdd"

console.log(returnPartial(stringReturne));