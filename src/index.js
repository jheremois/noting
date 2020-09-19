const express = require('express')
const path = require('path')
const env = require('node-env-file')
const {format} = require('timeago.js')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

// middleware:

app.use(express.urlencoded({extended: true}))

env('./.env')

app.use((req,res,next)=>{
    app.locals.time = format
    next()
})

// server:

const routes = require('./routes/router')

app.use('/', routes())

app.set('port', process.env.PORT || 3000 )

const port = app.get('port')

app.listen(port)
