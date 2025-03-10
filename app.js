let amigos = [];
let amigoSecreto;

function agregarAmigo() {
    var amigo = document.getElementById("amigo");
    let listaAmigos = document.getElementById("listaAmigos");

    if (amigo.value == '') {
        alert('por favor ingresa un nombre');
    } else {
        amigos.push(amigo.value);
        amigo.value = '';
        listaAmigos.innerHTML = '';

        for (i = 0; i < amigos.length; i++) {
            let lista = document.createElement('li');
            lista.innerText = amigos[i];
            listaAmigos.appendChild(lista);
        }
    }
}

function sortearAmigo() {
    if (amigos.length != 0) {
        var amigoSecretoSorteado = document.getElementById('resultado');
        var lugarAmigoSecreto = Math.floor(Math.random() * amigos.length);
        amigoSecretoSorteado.innerHTML = 'tu amigo secreto es ' + amigos[lugarAmigoSecreto];
    } else {
        alert('ingresa un amigo');
    }
}