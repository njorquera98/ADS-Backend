const express = require('express')
const db = require('./database/db.js')
const router = require("./router/usuario.router")

const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
