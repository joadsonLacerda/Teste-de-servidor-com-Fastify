import festify from 'fastify'

const servidor = festify({
    logger: true
})

servidor.get('/test', (req, res) => {
const saudacao = "ola mundo, bem vindo ao servidor local host usando o Fastify"
return res.send(saudacao)
})


servidor.listen({port:3000})
