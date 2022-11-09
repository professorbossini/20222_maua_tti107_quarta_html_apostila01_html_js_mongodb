const protocolo = 'http';
const baseURL = 'localhost:3000'
const filmesEndpoint = '/filmes'
async function obterFilmes(){
  //f'{2 + 2}'
  const URLCompleta = `${protocolo}://${baseURL}${filmesEndpoint}`
  //datum: dado
  //data: dados
  const filmes = (await axios.get(URLCompleta)).data
  console.log(filmes)
}

//CORS: Cross Origin Resource Sharing

