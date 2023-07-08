const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.get('/calcular-frete', (req, res) => {
  const unidade = req.query.unidade

  // Realize o cálculo do frete com base nos dados fornecidos
  const frete = calcularFrete(unidade)

  res.json({ frete })
})

function calcularFrete(unidade) {
  const precos = [
    null,
    33.85,
    60.25,
    86.8,
    113.1,
    139.25,
    166.05,
    190.0,
    210.0,
    215.0,
    220.2,
    240.2,
    260.2,
  ]
  return precos[unidade]
}

const port = 3000
app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`)
})
