const express =require('express');
const bodyParser=require('body-parser');
const cors =require('cors');
const passport =require('passport');
const expressSession =require('express-session');
const cookieParser=require('cookie-parser');
const bcrypt=require('bcrypt');
const db=require('./db');

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



app.get('/',(req,res)=>{
    res.send('Hello world');
});

app.post('/register',(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const query ="INSERT INTO account (`email,password`) VALUES(?,?)"; 
    const query2="SELECT * FROM account WHERE email=?";

    db.query(query2,[email],(err,result)=>{
   if(err){throw err;}
   if(result.length>0){
    res.send({message:"email already exists"});
   }
   if(result.length ===0){
    const hashedPassword =bcrypt.hashSync(password,10);
    db.query(query,[email,password],(err,result)=>{
        if(err){throw err;}
        res.send({message:"user created"});
    })
   }
    });

})

app.listen(3001,() =>{
    console.log('server start on part 3001');
})