// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/* Guardar nombres */
let nombres = [];

/* Funcion para agregar amigos */
function agregarAmigo(){
    /*  Obtener valor del input */
    Nombres = document.getElementById('amigo').value;

    /* Hacer validación por si el campo viene nulo */
    if(Nombres == ''){
        alert('El campo no puede ir nulo');
        return;
    }else{

        /* Agregar los nombres al array */
        nombres.push(Nombres);
        listarAmigos();

        /* Vaciar el campo */
        document.getElementById('amigo').value = ('');
    }
}

/* Funcion para mostrar los amigos */
function listarAmigos() {
    listaAmigos = '';
    nombres.forEach(nombre => {
        listaAmigos += '<li>' + nombre + '</li>';
    });
    agregarHTML('listaAmigos', listaAmigos);
}

/* Funcion para sortear los amigos */

function sortearAmigo(){
    if (nombres.length === 0) {
        alert('No hay amigos en la lista');
        return;
    }
    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    // Obtener el nombre correspondiente al índice aleatorio
    let amigoAleatorio = nombres[indiceAleatorio];
    agregarHTML('resultado','<li>' + amigoAleatorio + '</li>');
}

/* Funcion para añadir los datos al HTML */
function agregarHTML(id,datos){
    let Html = document.getElementById(id);
    Html.innerHTML = ''; 
    Html.innerHTML = datos; 
}


