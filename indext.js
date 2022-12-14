const app = require('express')()
const PORT = 8080

'use strict';
var request = require('request');

var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo';

app.listen(
  PORT,
  () => console.log(`it's alive on ${PORT}`)
)

app.get('/tshirt', (req, res) => {
  res.status(200).send({
    tshirt: 'wendy',
    size: 'checks'
  })
})

app.post('/tshirt/:id', (req, res) => {
  const { id } = req.params
  const { logo } = req.body
})