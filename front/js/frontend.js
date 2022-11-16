const protocolo = 'http';
const baseURL = 'localhost:3000'
const filmesEndpoint = '/filmes'
async function obterFilmes(){
  //f'{2 + 2}'
  const URLCompleta = `${protocolo}://${baseURL}${filmesEndpoint}`
  //datum: dado
  //data: dados
  const filmes = (await axios.get(URLCompleta)).data
  const tabela = document.querySelector('.filmes')
  const corpoTabela = tabela.getElementsByTagName('tbody')[0]
  for (let filme of filmes){
    const linha = corpoTabela.insertRow(0)
    const celulaTitulo = linha.insertCell(0)
    const celulaSinopse = linha.insertCell(1)
    celulaTitulo.innerHTML = filme.titulo
    celulaSinopse.innerHTML = filme.sinopse
  }
}

async function cadastrarFilme(){
  //montar a URL que dá acesso ao endpoint de interesse
  //http://localhost:3000/filmes
  const URLCompleta = `${protocolo}://${baseURL}${filmesEndpoint}`
  //pegar referência aos campos em que o usuário digitou os dados de interesse
  // const tituloInput
  const tituloInput = document.querySelector('#tituloInput')
  const titulo = tituloInput.value
  // const sinopseInput = document.querySelector('#sinopseInput')
  const sinopse = (document.querySelector('#sinopseInput')).value
  //limpar os campos
  tituloInput.value = ""
  // sinopseInput.value = ""
  document.querySelector('#sinopseInput').value = ""
  //enviar os dados ao servidor (back end)
  const filmes = (await axios.post(URLCompleta, {titulo, sinopse})).data
  //encontrar a tabela
  const tabela = document.querySelector('.filmes')
  //encontrar o corpo da tabela
  const corpoTabela = tabela.getElementsByTagName('tbody')[0]
  corpoTabela.innerHTML = ""
  for (let filme of filmes){
    const linha = corpoTabela.insertRow(0)
    const celulaTitulo = linha.insertCell(0)
    const celulaSinopse = linha.insertCell(1)
    celulaTitulo.innerHTML = filme.titulo
    celulaSinopse.innerHTML = filme.sinopse
  }


  //pegar o que o usuário digitou



}

