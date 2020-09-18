const express = require('express')

const router = express.Router()

const controller = require('../controller/controller')

module.exports = () =>{

    router.get('/', controller.main)

    router.post('/', controller.save)

    router.post('/edit', controller.edit)

    router.post('/change', controller.change)

    router.post('/delete/:id', controller.delete)

    return router
}