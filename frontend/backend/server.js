import express from 'express'
import cors from 'cors'
import stocks from './api/stocksRoute.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/stocks', stocks)
app.use('*', (req, res) => res.status(404).json({ error: "not found" }))

export default app