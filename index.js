const express = require('express')
const app = express()
//aplicação de middleware
app.use(express.json())

let filmes = [
  {
    titulo: 'Forrest Gump - O Contador de Histórias',
    sinopse: 'Quarenta anos da história dos Estados Unidos, vistos pelos olhos de Forrest Gump (Tom Hanks), um rapaz com QI abaixo da média e boas intenções.'
  },
  {
    titulo: 'Um Sonho de Liberdade',
    sinopse: 'Em 1946, Andy Dufresne (Tim Robbins), um jovem e bem sucedido banqueiro, tem a sua vida radicalmente modificada ao ser condenado por um crime que nunca cometeu, o homicídio de sua esposa e do amante dela'
  }
]


//localhost:3000/hey
//hey
app.get('/hey', (req, res) => {
  res.send('hey')
})


//GET
//localhost:3000/filmes
//filmes
app.get('/filmes', (req, res) => {
  res.json(filmes)
})

//escrever esse endpoint
//POST
//localhost:3000/filmes
//Cadastrando...
app.post('/filmes', (req, res) => {
  //1. extrair o título existente não requisição
  const titulo = req.body.titulo

  //2. extrair a sinopse existente na requisição
  const sinopse = req.body.sinopse
 
  //3. construir um objeto JSON com título e sinopse vindos da requisição
  // const filme = {titulo: titulo, sinopse: sinopse}
  const filme = {titulo, sinopse}

  //4. adicionar esse objeto JSON à minha coleção de filmes
  filmes.push(filme)

  //5. responder ao cliente, entregando a ele uma cópia da base atualizada
  res.json(filmes)
})


app.listen(3000, () => {
  console.log('Servidor em funcionamento....')
})














//JSON: JavaScript Object Notation

//{titulo: "Vingadores", sinopse: "fweçajlfwjeafçlwke"}

//escrever um JSON que te representa. Você tem nome e idade
/*
  [
    {titulo: "Vingadores", sinopse: "fjelçwkaf"},
    {titulo: "Avatar", sinopse: "felkçwaj"}
  ]

*/
//escrever uma coleção JSON que contém você e um amigo seu. Vocês têm nome, idade e altura

//Escreva um objeto JSON que te representa. Você tem nome, idade e endereço. Seu endereço tem logradouro, número e bairro.

/*
  {
    nome: "Pedro",
    idade: 22,
    endereco: {
      logradouro: "Rua B",
      numero: 12,
      bairro: "Vila K"
    }
  }
*/
