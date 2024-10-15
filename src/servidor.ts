import festify from 'fastify'

const servidor = festify({
    logger: true
})

servidor.get('/test', (req, res) => {
const saudacao = "ola mundo, bem vindo ao servidor local host mais uma vez"
return res.send(saudacao)
})


servidor.listen({port:3000})