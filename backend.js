//mongodb+srv://professorbossini:professorbossini@cluster0.wttmkyk.mongodb.net/?retryWrites=true&w=majority
const express = require('express')
const cors = require ('cors')
const mongoose = require ('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require ('bcrypt')
const app = express()
//aplicação de middleware
app.use(express.json())
app.use(cors())

const Filme = mongoose.model('Filme', mongoose.Schema({
  titulo: {type: String},
  sinopse: {type: String}
}))

const usuarioSchema = mongoose.Schema({
  login: {type: String, required: true, unique: true},
  password: {type: String, required: true}
})
usuarioSchema.plugin(uniqueValidator)
const Usuario = mongoose.model("Usuario", usuarioSchema)


async function conectarAoMongoDB(){
  await mongoose.connect('mongodb+srv://professorbossini:professorbossini@cluster0.wttmkyk.mongodb.net/?retryWrites=true&w=majority')
}


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
app.get('/filmes', async (req, res) => {
  const filmes = await Filme.find()
  res.json(filmes)
})

//escrever esse endpoint
//POST
//localhost:3000/filmes
//Cadastrando...
app.post('/filmes', async (req, res) => {
  //1. extrair o título existente não requisição
  const titulo = req.body.titulo

  //2. extrair a sinopse existente na requisição
  const sinopse = req.body.sinopse
 
  //3. construir um filme usando o modelo Mongoose
  const filme = new Filme({titulo, sinopse})

  //4. cadastrar o novo filme na base gerenciada pelo MongoDB
  await filme.save()

  //5. pegar todos os filmes junto ao MongoDB
  const filmes = await Filme.find()

  //6. responder ao cliente, entregando a ele uma cópia da base atualizada
  res.json(filmes)
})


app.post('/signup', async (req, res) => {
  try{
    //1. pegar login e password da requisição
    const login = req.body.login
    let password = req.body.password
    //2. construir um objeto usuario da Mongoose
    password = await bcrypt.hash(password, 10)
    const usuario = new Usuario({login, password})
    //3. salvar o usuário na base gerenciada pelo MongoDB
    const resultMongoDB = await usuario.save()
    //4. exibir o resultado no log (apenas para testes)
    console.log(resultMongoDB)
    //5. responder ao usuario que tudo deu certo
    res.status(201).end()   
  }
  catch (erro){
    console.log(erro)
    res.status(409).end()
  }
})

app.listen(3000, () => {
  try{
    console.log('Servidor em funcionamento....')
    conectarAoMongoDB()
    console.log('Conexão MongoDB OK')
  }
  catch (erro){
    console.log('erro', erro)  
  }
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
