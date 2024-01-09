const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/', (req, res) => {
  res.send('Hello charusat!')
})


app.listen(port, () => {
  console.log(`Running this on this  ${port}`)
})
