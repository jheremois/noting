const express = require('express')
const path = require('path')
const env = require('node-env-file')
const http = require('http')
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

const server = http.createServer(app)
const routes = require('./routes/router')

app.use('/', routes())

// 404

app.use(function(req, res, next){
    res.status(404)

    res.render('404', { url: req.url })

    return
})

// Run app

app.set('port', process.env.PORT || 3000 )

const port = app.get('port')

server.listen(port)
