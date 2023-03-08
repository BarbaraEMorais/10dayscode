function insert(numero){
    document.getElementById('resultado').innerHTML += numero;

}

function limpar(){
    document.getElementById('resultado').innerHTML = '';
    insert(0);
}

function apaga(){

    var valor = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = valor.substring(0, valor.length -1);
}

function calculo(){
    
    var valor = document.getElementById('resultado').innerHTML;
    if(valor){
        document.getElementById('resultado').innerHTML = eval(valor);
    }
}