// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Amigo Screto, logica del juego


let amigos = [];

//Función para agregar un amigo a la lista

function agregarAmigo(){
    const inputAmigo = document.getElementById ("amigo");
    const nombreAmigo = inputAmigo.ariaValueMax.trim();


    //Alerta si no se agg agrimo
   
    if (nombre === "") {
        alert("Por favor, inserte un nombre valido.");
        return;
    };


    amigos.push(nombreAmigo); //agregar el amigo
    inputAmigo.ariaValu = ""; //Limpiar campo de entrada
    actualizarlista(); //Para actualizar lista

}


function actualizarlista(){ //Actualizar lista de amigos.
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; //Borrar contenido previos en el contenedor.
    
    for (let i = 0; <amigos.length i++); {
        const li = document.createElement('li');

        li.textContent =  amigos[i];
        listaAmigos.appendChild(li);
    } 
}


function sortearAmigo(){
    if (amigos.length == 0){
        alert("No existen amigos disponibles")
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); //Generar Indice aleatorio
    const amigoSorteado = amigos[indiceAleatorio]; //Obtener el nombre sorteado 

    const resultado = document.getElementById('resultado'); //Mostrar resultado HTML
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}