require('dotenv').config()
const express = require('express');
const indexRouter = require('./routes/indexRouter');
const app = express()
const cors = require('cors');
require('../database/connection')
app.set('PORT', process.env.PORT || 8080)
app.use(express.json())
app.use(cors())

app.get('',(req,res)=>res.send("Welcome"))
app.use(indexRouter)

app.listen(app.get('PORT'), ()=>console.log(`Server running in http://localhost:${app.get('PORT')}`))