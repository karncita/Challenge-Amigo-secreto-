const amigos = [];
 function agregarAmigo() {
    const nombreEntrada = document.getElementById("amigo");
    const nombre = nombreEntrada.value.trim();

    if (nombre === ""){
        alert("Por favor,ingrese un nombre.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    nombreEntrada.value = "";

 }

 function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo,index) => {
        const li = document.createElement("li");
        li.textContent= amigo;
        lista.appendChild(li);
    });

}

 function sortearAmigo(){
    if (amigos.length === 0){
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random()* amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado =document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es:<strong>${amigoSorteado}</strong> </li>`;
 }    