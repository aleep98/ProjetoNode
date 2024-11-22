import { fastify } from "fastify";
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()

server.post('/videos', async (request, reply) => {
    const { title, description, duration} = request.body

    await database.create({
        title,
        description,
        duration
    })

    return reply.status(201).send()
})


server.get('/videos', () => {
    const videos = database.list()
    console.log(videos)
    return videos
})

server.put('/videos/:id', () => {
    return 'Hello, Alexandre'
}
)

server.delete('/videos/:id', () => {
    return 'Hello, Alexandre'
})

server.listen({
    port: 3333,
})

