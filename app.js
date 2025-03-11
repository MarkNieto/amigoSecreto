// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Se define un array de nombre amigos
const amigos = [];
const nombreAmigo = document.getElementById('amigo');
const botonAgregar = document.getElementById('agregar');
const lista = document.getElementById('listaAmigos');
const resultado =  document.getElementById('resultado');
const botonSortear = document.getElementById('botonSortear');

//Se crea una función que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente.
botonAgregar.onclick = function agregarAmigo(){
    if( nombreAmigo.value != ''){
        amigos.push(nombreAmigo.value);
        nombreAmigo.value = "";
        
    }else{
        window.alert("Por favor, inserte un nombre");
    }


    agregarLista();
    //console.log(amigos);
    botonSortear.disabled = false;
}

//Función que permite agregar nombres a la lista según los elementos que contenga el array 

function agregarLista(){
    lista.innerHTML = "";
    for(let i=0; i<amigos.length; i++){
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

//Función para validar que haya elementos disponibles en el array
botonSortear.onclick = () => {

    if(botonSortear.disabled = amigos.length === 0){
        resultado.innerHTML = "No hay amigos que seleccionar";
        return;
    }else{
   //generar un indice aleatorio para el array
   const indiceAleatorio = Math.floor(Math.random() * amigos.length);
   //Obtener el nombre sorteado
   const amigoSeleccionado = amigos[indiceAleatorio];
   //Se muestra el resultado en el elemento seleccionado
   console.log(amigos);
   console.log(indiceAleatorio);
   console.log(amigoSeleccionado);
   resultado.innerHTML = amigoSeleccionado;
    }
}

