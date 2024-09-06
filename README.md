# Conversor de Moedas
## Sobre o Software
O Conversor de Moedas é um software que proporciona ao usuário uma facilidade na conversão de moedas. Ele foi construído com as linguagens HTML, CSS e JavaScript. A fonte das informações usadas nas conversões do Conversor é a API pública AwesomeAPI. O conversor obtém as taxas de conversão fornecidas pela API e as exibe de forma amigável e dinâmica. A inspiração do Conversor de Moedas foi o site dolarhoje.com, que também executa conversões de moedas.
![Tela inicial da aplicação](https://github.com/Natan-Oliveira-da-Silva/Conversor-de-Moedas/blob/main/tela_inicial.png)
## Como acessar
O Conversor pode ser acessado pelo link a seguir: [Acesse o projeto](https://natan-oliveira-da-silva.github.io/Conversor-de-Moedas/)
## Como usar
Para fazer uma conversão, basta selecionar duas das opções de moeda e digitar um valor em qualquer um dos campos de digitação. Automaticamente, a conversão será feita e seu resultado será exibido no outro campo de digitação.
## Conexão com API
A conexão com a API pública AwesomeAPI é feita com o verbo fetch() da linguagem JavaScript. Abaixo, pode-se ver um trecho do código JavaScript usado. Nele, uma função assíncrona usa o método `fetch()` para buscar informações em uma API. Após as informações serem obtidas, elas são convertidas com o método `.json()`. Depois, o programa seleciona dentre todas as informações obtidas a taxa de câmbio entre duas moedas. 
```
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
```
## Modo Claro e Escuro
O Conversor de Moedas possui um recurso feito com CSS e JavaScript que alterna entre os modos claro e escuro. O modo escuro é útil para aumentar o conforto do usuário durante o uso noturno da aplicação. A imagem abaixo exemplifica isso.
![Modo claro e escuro](https://github.com/Natan-Oliveira-da-Silva/Conversor-de-Moedas/blob/main/modo_claro_e_escuro.png)
## Responsividade
Usando a linguagem CSS, o Conversor é adaptável a diferentes tamanhos de tela, o que o torna usável por celulares, tablets e desktops. A imagem abaixo mostra como a aplicação adapta-se a formatos de tela diferentes.
![Exemplo de responsividade](https://github.com/Natan-Oliveira-da-Silva/Conversor-de-Moedas/blob/main/responsividade.png)
