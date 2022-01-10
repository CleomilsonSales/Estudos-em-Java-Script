//Primeira questão
function embaralhaString (strEntrada1,strEntrada2){
    //limpando variavel
    var resultado = '';

    //unindo as strings
    var entradasJuntas = strEntrada1 + strEntrada2;

    //divide a String em uma lista ordenada
    entradasJuntas = entradasJuntas.split('');

    //laço pra misturar as variaveis
    while (entradasJuntas.length > 0) {
        //altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos
        resultado += entradasJuntas.splice(entradasJuntas.length * Math.random() << 0, 1);
    }
    return resultado;
}

console.log(embaralhaString("Cleomilson","Sales"))
