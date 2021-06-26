function inverter() {
    var nome = document.getElementById('aaa').value;
    var nomeinvertido = '';
    for (var i = nome.length - 1; i >= 0; i--) {
        nomeinvertido += nome[i];
    }
   document.getElementById('resultado').innerHTML = nomeinvertido;
}