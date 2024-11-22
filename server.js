import { fastify } from "fastify";
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

server.post('/videos', () => {
    return 'Hello, World'
})

server.get('/videos', () => {
    return 'Hello, Alexandre'
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

