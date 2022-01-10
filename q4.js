//Quarta questão
//função para transforma string em data, evitando assim problema de format de data padrão js 'MM-dd-yyyy'
function toDate(texto) {
    let partes = texto.split('/');
    return new Date(partes[2], partes[1]-1, partes[0]);
}
//voltando ao formato inicial da string de data  
function toString(date) {
    return ('0' + date.getDate()).slice(-2) + '/' +
        ('0' + (date.getMonth() + 1)).slice(-2) + '/' +
        date.getFullYear();
}
//para fazer as intersecção entre as data
function interseccaoDatas (p_dtInicioA, p_dtFimA, p_dtInicioB, p_dtFimB) {
    //transformando string em data, não gosto do newDate, porque tem que tratar o formato
    var dtInicioA = toDate(p_dtInicioA);
    var dtFimA = toDate(p_dtFimA);
    var dtInicioB = toDate(p_dtInicioB);
    var dtFimB = toDate(p_dtFimB);
    //criando arrays
    var intervalosA = [];
    var intervalosB = [];
    //inserção inicial nos arrays
    intervalosA.push(toString(dtInicioA));
    intervalosB.push(toString(dtInicioB));

    //laços para criar os arrays usando na vefiricação das intersecções
    while (dtInicioA < dtFimA) {
        dtInicioA.setDate(dtInicioA.getDate() + 1);
        intervalosA.push(toString(dtInicioA));
    };

    while (dtInicioB < dtFimB) {
        dtInicioB.setDate(dtInicioB.getDate() + 1);
        intervalosB.push(toString(dtInicioB));
    };

    //fazendo intersecção com uma arrow function    
    var intersection = intervalosA.filter(i => intervalosB.includes(i));
    var resultado;

    //verificando se teve intersecção
    if (intersection.length > 0){
        resultado = true;
    }else{
        resultado = false
    }

    return resultado;
}

console.log(interseccaoDatas('01/12/2013', '15/12/2013', '20/12/2013', '31/12/2013')); 