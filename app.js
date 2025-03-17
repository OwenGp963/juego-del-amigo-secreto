// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if(amigo == false){
        alert("Por favor, inserte un nombre.");
    }else{
        amigos.push(amigo);
        console.log(amigos);
        limpiarCaja();
        mostrarAmigo();
    }
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function mostrarAmigo(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for(let i=0;i<=amigos.length;i++){
        let item = document.createElement('li')
        item.textContent = amigos[i-1];    
        lista.appendChild(item); 
    }
   
}

function sortearAmigo(){
    let resultado = document.getElementById('resultado');
    let item = document.createElement('li')
    let random = Math.floor((Math.random()*amigos.length))

    resultado.innerHTML = "";

    if(amigos == false){
        alert("Por favor, inserte un nombre.");
    }else{
        console.log(random)
        item.textContent = `El amigo ganador es: ${amigos[random]}`
        resultado.appendChild(item);
    }
     
}