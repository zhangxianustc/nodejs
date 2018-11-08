const http = require('http')
const url = require('url'
)
http.createServer(function (request, response) {
  let tmp = request.url
  url.parse(tmp)
  console.log(url)
  response.writeHead(200, { 'Context-Type': 'text-plain' })
  response.end('hello world\n')
}).listen(8123)
