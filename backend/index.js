import express from "express";
import mysql from "mysql2";
import cors from 'cors';
const app =express();
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"test"
})

app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.json("hello this is backend")
})

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.get("/getBooks",(req,res)=>{
    const q="SELECT * FROM books"
    db.query(q,(err,data)=>{
        if(err) {
            console.log(err);
            res.send(err)
        }else{
            res.send(data)
            console.log(data);
        }
    })
})

app.post("/books",(req,res)=>{
    const q="INSERT INTO books (`title`,`desc`,`cover`) VALUES (?)"
    const values =[
       req.body.title,
       req.body.desc,
       req.body.cover,
    ]

db.query(q,[values],(err,data)=>{
if(err) return res.json(err)
return res.json(data)
});
});

app.delete("/books/:id",(req,res)=>{
    const bookId=req.params.id;
    const q ="DELETE FROM books WHERE ID=?"
    db.query(q,[bookId],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
        });
        });

        app.put("/books/:id",(req,res)=>{
            const bookId=req.params.id;
            const q ="UPDATE books SET `title`=?,`desc`=?, `cover`=? WHERE id =?";
            const values=[
                req.body.title,
                req.body.desc,
                req.body.cover
            ]
            db.query(q,[...values,bookId],(err,data)=>{
                if(err) return res.json(err);
                return res.json(data);
                });
                
                });
        
app.listen(8800,()=>{
    console.log("connected backend")
})