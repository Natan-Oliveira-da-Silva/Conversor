async function main(){
    const taxaDeConversao = await coletaValor("USD","BRL");
    await declaraEAtualizaOsEscutadores(taxaDeConversao);
}

main();
const nomesDasMoedas = {
    BRL: 'Real Brasileiro',
    GBP: 'Libra Esterlina',
    USD: 'Dólar Americano',
    EUR: 'Euro'
};
async function coletaValor(esq,dir){   
    const url = `https://economia.awesomeapi.com.br/last/${esq}-${dir}`;
    try{
        const resposta = await fetch(url);
        const dados = await resposta.json();
        for (let i in dados) {
            if (dados.hasOwnProperty(i)) {
                const objeto = dados[i];
                const taxa = objeto.bid;
                console.log("A taxa de conversão de "+esq+" para o "+dir+"  é de "+taxa+".");
                return taxa;
            }
        }
    }catch(error){
        console.log("Falha ocorrida.");
        alert("Lamentamos.\nHouve uma falha na busca do valores das moedas.");
    };
}

const opcoesDeMoeda = document.querySelectorAll(".opcoesDeMoeda");

opcoesDeMoeda.forEach(function(opcao) {
    opcao.addEventListener("change", function() {
        let opcaoDoLadoEsquerdo = document.getElementById("selectEsquerdo").value;
        let opcaoDoLadoDireito = document.getElementById("selectDireito").value;

        console.log("No lado esquerdo: "+opcaoDoLadoEsquerdo+"\nNo lado direito: "+opcaoDoLadoDireito);
        //colocaNome(opcaoDoLadoEsquerdo,opcaoDoLadoDireito);
        coletaValor(opcaoDoLadoEsquerdo,opcaoDoLadoDireito);
    });
});

async function declaraEAtualizaOsEscutadores(taxaDeCambio){
    const campoEsquerdo = document.getElementById("inputEsquerdo");
    const campoDireito = document.getElementById("inputDireito");
    campoEsquerdo.addEventListener('input', function(){
        campoEsquerdo.value = validaEntrada(campoEsquerdo.value);
        campoDireito.value = (campoEsquerdo.value * taxaDeCambio).toFixed(2);
    });
    campoDireito.addEventListener('input',function(){
        campoDireito.value = validaEntrada(campoDireito.value);
        campoEsquerdo.value = (campoDireito.value / taxaDeCambio).toFixed(2);
    });
    zeraOsInputs(taxaDeCambio);
};
function zeraOsInputs(valorInputEsq){
    const campoEsquerdo = document.getElementById("inputEsquerdo");
    const campoDireito = document.getElementById("inputDireito");
    campoEsquerdo.value="1.00";
    campoDireito.value = (campoEsquerdo.value * valorInputEsq).toFixed(2);
}
function colocaNome(codigoEsq,codigoDir){
    const nomeEsq = document.getElementById("nomeEsquerdo");
    const nomeDir = document.getElementById("nomeDireito");
    nomeEsq.innerHTML=nomesDasMoedas[codigoEsq];
    nomeDir.innerHTML=nomesDasMoedas[codigoDir];
}