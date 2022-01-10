//Terceira questão
function contaOcorrencias(strEntrada) {
    //tornando todas as letras em minusculas para que sejam contandas todas as palavras
    strEntrada = strEntrada.toLowerCase();
    //criando um objeto para mostrar meu contador em formato json
    var obj = {};
    //criando meu array para evitar usar o split ou algo que quebre da string em palavras automaticamente
    var arrayPalavrasSeparadas = [];
    //indexOf - para saber onde termina as palavras separado por espaço
    var fim = strEntrada.indexOf(" ",0);

    //laço que separa as palavras e vai adicionando no array
    for (var i=0; i < strEntrada.length; i++ ){
        //adicionando minhas palavras encontradas no array
        arrayPalavrasSeparadas.push(strEntrada.substring(i,fim));
        
        //atualizando variaveis de inicio de fim do substring
        if (strEntrada.indexOf(" ",fim+1) > 0) {
            i = fim;
            fim = strEntrada.indexOf(" ",i+1);
        }else{
            i = fim;
            fim = strEntrada.length;
        }
    }

    //laço para realizar a contagem das palavras passada para a função
    for (var i = 0; i < arrayPalavrasSeparadas.length; i++) {
        if (!obj[arrayPalavrasSeparadas[i]]) 
        obj[arrayPalavrasSeparadas[i]] = 0;

        obj[arrayPalavrasSeparadas[i]]++;

    }

    return obj;
}

//chamando a função
var resultado = contaOcorrencias("asa Bola Casa Asa bola asa");

console.log(resultado); 
