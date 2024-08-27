function botaoenviar() {
    const inputtext = document.getElementById('nome');
    const inputfrequencia = document.getElementById('frequencia');
    const campolista = document.getElementById('lista');

    if(inputtext.value || inputfrequencia.value){
        const criarlista = document.createElement('p');
        criarlista.innerHTML += '<br>' + 'Hobbie: ' + inputtext.value + '<br>' + 'Frequencia: ' + inputfrequencia.value + '<br><br>';
        campolista.appendChild(criarlista);
        criarlista.style.color = "white";
        criarlista.style.backgroundColor = "green";
        criarlista.style.borderRadius = "5px";
        criarlista.style.padding = "10px";
        criarlista.style.margin = "10px 0";
        const botaodeletar = document.createElement('button');
        botaodeletar.style.fontSize = "20px";
        botaodeletar.className = 'bi bi-x-circle-fill';
        criarlista.appendChild(botaodeletar);
        botaodeletar.onclick = function(){
        criarlista.remove();
        } 
    } else{
        alert('Preencha todos os campos!');
    } 
}

// Botão enviar adiciona os dados dos inputs na tela, caso não esteja preenchido emite alerta na tela para o usuário preencher os campos//
// Dentro da verificação dos inputs estarem preenchidos, tem o botão de delet para excluir os hobbies da lista que o usuário não ddeseja mais ter inserido na lista.//
