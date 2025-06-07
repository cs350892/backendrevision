require('dotenv').config();
const express = require('express')
const app = express()

console.log("Loaded PORT from .env:", process.env.PORT)

const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('chandradotcomS')
})

app.get('/login', (req, res) => {
  res.send('<h1>Pls login at our website</h1>')
})

app.get('/youtube', (req, res) => {
  res.send('<h2>This is my channel</h2>')
})

app.listen(port, () => {
  console.log(`🚀 Server running at: http://localhost:${port}`)
})
