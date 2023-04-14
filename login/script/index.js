// 1) Tela de login: redirecionamento de pagina
const entrar = document.querySelector(".entrar");
logar = () => {
    document.querySelector(".nome").value = "";
    document.querySelector(".senha").value = "";
    
}

entrar.addEventListener("click", logar);

// 2) Tela de login: Senha oculta
var senha = document.querySelector(".senha").value;



Alteracao = () => {
    var senha = document.querySelector(".senha").value;
    var senhaLista = senha.split(""); 
    
    for (var c  = 0; c < senhaLista.length; c++){
        senhaLista[c] = "*";                                                 //O programa nao poe * na hora, corrigir isso. 
        if (c > 20){
            break;
        }
    }
   
    document.querySelector(".senha").value = senhaLista.join('');
    
}

// 3) Tela de login: mudanca de cor do botao

Cor = () => {
    var bot = document.querySelector(".entrar");
    bot.classList.add('cor');
}
desCor = () => {
    var bot = document.querySelector(".entrar");
    bot.classList.remove('cor');
}
