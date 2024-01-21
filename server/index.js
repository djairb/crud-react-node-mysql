const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({

    host:"localhost",
    user:"root",
    password:"Karolinne102",
    database:"crudgames",
});

// crtrl + ;

// app.get("/", (req, res) => {
//     res.send("meu ovo")
// })

app.get("/", (req, res)=>{

    let SQL = 'insert into games (nome, preco, categoria) values ("God of War", "120", "Romantico")';

    db.query(SQL, (err, result)=>{
        console.log(err)
    })



})

app.listen(3001, ()=>{
    console.log("rodando servidor");
});

