const pool = require('../db/conection')
const { request } = require('express')


exports.main = (req, res)=>{
    pool.query('SELECT * FROM notes',(err, result)=>{
        res.render('main', {notes: result})
    })
}

exports.save = (req, res)=>{

    const {title} = req.body
    const {content} = req.body

    pool.query(`INSERT INTO notes SET?`,{
        title,
        content,
    },(err, result)=>{
        res.redirect('/')
    })

}

exports.edit = (req, res)=>{

    let note_front = parseInt(req.body.note_front)
    let note_db = parseInt(req.body.note_db)

    pool.query('SELECT * FROM notes',(err, result)=>{
        res.render('edit', {
            notes: result,
            note_front,
            note_db
        })
    })

}

exports.delete = async (req, res)=>{
    let {id} = req.params
    
    const Delete = await pool.query(`DELETE FROM notes WHERE id = ${id}`)

    res.redirect('/')
}

