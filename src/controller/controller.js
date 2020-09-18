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

exports.change = async (req, res)=>{

    const {new_title, new_note, id} = req.body
    
    const the_note = {
        title: new_title,
        content: new_note,
    }
    
    const update = await pool.query(`UPDATE notes SET ? WHERE id = ?`, [the_note, id])

    res.redirect('/')

}

exports.delete = async (req, res)=>{
    let {id} = req.params
    
    const Delete = await pool.query(`DELETE FROM notes WHERE id = ${id}`)

    res.redirect('/')
}

