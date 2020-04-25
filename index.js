const express = require('express')
const http = require('http')
const PeerDataServer = require('peer-data-server')

const DEFAULT_PORT = 8080

const app = express()

const appendPeerCdnServer = PeerDataServer.default || PeerDataServer
const server = http.createServer(app)

appendPeerCdnServer(server)

server.listen(DEFAULT_PORT, () =>
  console.log(`Server started at port ${DEFAULT_PORT}`)
)
