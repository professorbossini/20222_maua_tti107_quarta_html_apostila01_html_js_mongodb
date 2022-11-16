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

//CORS: Cross Origin Resource Sharing

