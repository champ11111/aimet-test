import express from 'express'
import { initController } from './controllers'
import bodyParser from 'body-parser'
import cors from "cors";

require('dotenv').config()

const app = express()
const port = process.env.PORT

app.use(bodyParser.json()) // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
)

// Configure CORS to allow requests from all origins
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}))

// Set up routes
initController(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
