const express = require('express')
const app = express()
const cors=require('cors')
require('dotenv').config()
require('./models/db')
const bodyParser=require('body-parser')
const AuthRouter=require('./routes/AuthRouter')
const port = process.env.PORT || 8080;

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use('/auth',AuthRouter)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})