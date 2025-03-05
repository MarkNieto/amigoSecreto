// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Se define un array de nombre amigos
const amigos = [];
const nombreAmigo = document.getElementById('amigo');
const botonAgregar = document.getElementById('agregar');
const lista = document.getElementById('listaAmigos');

//Se crea una función que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
botonAgregar.onclick = function agregarAmigo(){
    if( nombreAmigo.value != ''){
        amigos.push(nombreAmigo.value);
        nombreAmigo.value = "";
        
    }else{
        window.alert("Por favor, inserte un nombre");
    }


    agregarLista();
    console.log(amigos);
}

function agregarLista(){
    lista.innerHTML = "";
    for(let i=0; i<amigos.length; i++){
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}



