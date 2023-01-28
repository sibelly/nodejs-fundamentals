import http from 'node:http'

// CommonJS  => require
// ESModules => import/export

const server = http.createServer((request, response) => {
  return response.end('Hello Cosmos!!')
})

server.listen(3333)
