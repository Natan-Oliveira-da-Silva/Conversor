const chk = document.getElementById('chk');
chk.addEventListener('change',()=>{
    document.body.classList.toggle('escuro');
    document.querySelectorAll(".botoesLink").forEach(function(element) {
        element.classList.toggle('botaoEscuro');
    });
    document.querySelectorAll(".campoDoNome").forEach(function(element) {
        element.classList.toggle('campoEscuro');
    });
        // Seleciona o elemento <path> e altera o atributo 'fill'
    /*
    document.querySelectorAll(".myPath").forEach(function(element) {
        if(element.fill=="#000000"){
            element.setAttribute('fill', '#808080');
        }else{
            element.setAttribute('fill', '#000000');
        }
        
    });
    */
    //botar um if. Se está preto, mude para cinza. se está cinza, mude para preto
});