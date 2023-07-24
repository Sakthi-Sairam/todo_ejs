const express =require('express');
const ejs = require('ejs');


const bodyParser =require('body-parser');

const app=express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
let arr=[]
app.get("/",(req,res)=>{
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today  = new Date()
    day=today.toLocaleDateString("en-US", options)
    res.render("list",{kindofday:day,newarr:arr});
})
app.post("/",(req,res)=>{
    arr.push(req.body.newItem);
    res.redirect('/');
})



app.listen(3000,()=> console.log("port is running at server 3000"))