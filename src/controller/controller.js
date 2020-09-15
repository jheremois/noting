const pool = require('../db/conection')


exports.main = (req, res)=>{
    pool.query('SELECT * FROM notes',(err, result)=>{
        res.render('main', {notes: result})
    })
}

exports.save = (req, res)=>{

    let title = req.body.producto
    let content = req.body.contenido

    pool.query(`INSERT INTO notes SET?`,{
        title,
        content,
    },(err, result)=>{
        res.redirect('/')
    })

}

exports.delete = async (req,res)=>{
    const {id} = req.params
    
    const Delete = await pool.query(`DELETE FROM notes WHERE id = ${id}`)

    res.redirect('/')
}

