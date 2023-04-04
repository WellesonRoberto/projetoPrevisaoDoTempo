// VARIÁVEIS -> Um espaço da memória onde guardamos algo.
// FUNÇÃO -> Um trecho de código que só é executado quando chamado.

let chave = "6f49c01a06d53df206a04084c1f4b8af" // let permite declarar variáveis limitando seu escopo no bloco, instrução, 
//ou em uma expressão na qual ela é usada / chave-código do site
function colocarNaTela(dados) {
    console.log(dados)
    
document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name // document.querySelector = procurar uma classe (cidade)
document.querySelector(".temp").innerHTML =  Math.floor(dados.main.temp) + "°C" // Math.floor = arredonda
document.querySelector(".descricao").innerHTML =  dados.weather[0].description
document.querySelector(".icone").src="https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"



}
async function buscarCidade(cidade) { //  async é usado para indicar ao navegador que o script pode ser executado assincronamente
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + // await = dar um tempo pra carregar
        // fetch = é um comando básico usado para baixar conteúdos de um repositório remoto.
        //link =site de dados metereológicos 
        cidade +
        "&appid=" + // 2º parte da chave/código do site
        chave +
        "&lang=pt_br" + // traduzir pra português
        "&units=metric" // transformar pra unidade de medida métrica
    )
        .then(resposta => resposta.json()) // then pega a reposta, mas não no formato padrão. O formato certo seria o json, então foi convertido

    colocarNaTela(dados)
}

function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value // querySelector = seleciona alguma coisa, nesse caso a cidade

    buscarCidade(cidade)

}
