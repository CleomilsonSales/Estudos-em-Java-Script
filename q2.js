//Segunda questão
var inverterString = function inverte(strEntrada){
    /*
    split: divide a String em uma lista ordenada
    reverse: invertendo a ordenção de um array
    join: junta todos os elementos de um array em uma string
    */
    return strEntrada.split("").reverse().join("");
}

console.log(inverterString("CleomilsonSales"))