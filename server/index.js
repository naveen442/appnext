const express =require('express');
const bodyParser=require('body-parser');
const cors =require('cors');
const passport =require('passport');
const expressSession =require('express-session');
const cookieParser=require('cookie-parser');
const bcrypt=require('bcrypt');
var mysql = require('mysql2');
// const db=require('./db');

const app=express();
app.use( bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSession({secret:'mySecretKey',resave:false,saveUninitialized:false}));

app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}))

app.use(cookieParser('mySecretKey'));
app.use(passport.initialize());
app.use(passport.session());

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database:'blog'
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


app.get('/',(req,res)=>{
    res.send('Hello world');
});

app.post('/login',(req,res)=>{
    const {password,email} = req.body;
    const query ="INSERT INTO account (email,password) VALUES(?,?)"; 
    // const query2="SELECT * FROM account WHERE email=?";

    con.query(query,[email,password],(err,result)=>{
   if(err){
    console.log(err);
    }
//    if(result.length>0){
//     res.send({message:"email already exists"});
//    }
//    if(result.length ===0){
//     const hashedPassword =bcrypt.hashSync(password,10);
//     db.query(query,[email,password],(err,result)=>{
//         if(err){throw err;}
//         res.send({message:"user created"});
//     })
//    }
else{
    res.send(result);
    console.log(result);
}
    });

})

app.listen(3001,() =>{
    console.log('server start on part 3001');
})