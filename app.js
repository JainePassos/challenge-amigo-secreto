//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo(){


   let nome = document.getElementById("amigo").value
   
   document.getElementById("listaAmigos").textContent = `${nome}`

   if(nome == ""){

      alert('Por favor insira um nome');
   }else{
      amigos.push(nome)
      PercorrerLista() //atualiza
   }


   nome = document.querySelector('input')
   nome.value = '';
}

  


function PercorrerLista(){

 lista =  document.getElementById("listaAmigos");
  
   lista.innerHTML = "";

   for(i = 0; i < amigos.length; i++){

       lista.innerHTML += "<li>" + amigos[i] + "</li>";
   }
   
} 

 
function sortearAmigo(){

  

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    nomeSorteado = amigos[indiceAleatorio]

    if(amigos == ""){
      
      alert("A lista de amigos está vazia adicione um nome");
   }else{
   
   resultado =  document.getElementById('resultado')
   
   resultado.innerHTML += '<li>' + `${nomeSorteado}`+'</li>';
}
}

