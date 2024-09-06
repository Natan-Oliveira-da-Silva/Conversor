//const opcoesDeMoeda = document.querySelectorAll(".opcoesDeMoeda");

opcoesDeMoeda.forEach(function(opcao) {
    opcao.addEventListener("change", async function() {
        let opcaoDoLadoEsquerdo = document.getElementById("selectEsquerdo").value;
        let opcaoDoLadoDireito = document.getElementById("selectDireito").value;
        
        console.log("No lado esquerdo: "+opcaoDoLadoEsquerdo+"\nNo lado direito: "+opcaoDoLadoDireito);
        if(opcaoDoLadoDireito!=opcaoDoLadoEsquerdo){
            const novaTaxa = await coletaValor(opcaoDoLadoEsquerdo,opcaoDoLadoDireito);
            await declaraEAtualizaOsEscutadores(novaTaxa);
        }else{
            const novaTaxa = 1;
            declaraEAtualizaOsEscutadores(novaTaxa);
        }        
    });
});