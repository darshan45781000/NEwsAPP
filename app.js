//imports
const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

var app= express();
app.use(bodyParser.json());
const port=3001


var connection= mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"Yoga#9844",
        database:"shoppingcart",
        multipleStatements: true

    }
);

connection.connect((err)=>{
    if(!err)
    {
        console.log("success");
    }
    else
    {
        console.log("failed");
    }
})


//static files
app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public/css'))
app.use('/js',express.static(__dirname+'public/js'))
app.use('/img',express.static(__dirname+'public/img'))

app.set('views','./views')
app.set('view engine','ejs')


app.get('',(req,res)=>{
    connection.query("SELECT * from products",(err,rows)=>{
   if(!err)
   {
    res.render('html',{user : rows});
   }
   else
   {
       console.log(err);
   }
  // console.log(rows);
    })
})

app.get('/about',(req,res)=>{
 // let a=req.params.id
 // console.log(a);
    let sql="SELECT * from products where ProductId=" + 1;
    connection.query(sql,(err,rows)=>{
        if(!err)
        {
         res.render('about',{user : rows});
        }
        else
        {
            console.log(err);
        }
        //console.log(rows);
         })
})

app.get('/cart',(req,res)=>{
    connection.query("SELECT * from carttable",(err,rows)=>{
        if(!err)
        {
         res.render('cart',{user : rows});
        }
        else
        {
            console.log(err);
        }
       // console.log(rows);
         })
})

app.post('/insert',(request,response)=>{
    console.log('card method');
     console.log(request.body);
    let ImageUrl= request.body.imageurl;
    let price=request.body.price;
    let quantity=request.body.quality;
    let totalprice =request.body.total;
    let Name=request.body.Name;
    let ProcuctId=request.body.ProductId;
    console.log(totalprice);
     console.log(request.body.imageurl)

     //let sql = "insert into carttable(UserId,ImageUrl,ProductName,ProductPrice,ProductId,ProductTotalPrice,Quantity) values ('Darshan123','ImageUrl', 'name','price',1,'10','1')";
     let sql = "insert into carttable(UserId,ImageUrl,ProductName,ProductPrice,ProductId,ProductTotalPrice,Quantity) values ('Darshan123','"+ImageUrl+"','"+Name +"','"+price +"',"+ProcuctId +",'"+totalprice +"','"+quantity+"'"+")";
     connection.query(sql,(err,rows)=>{
        if(!err)
        {
            response.json({success: true})
        }
        else
        {
            console.log(err);
        }
    })
   // res.render('cart')

       
})


//listen on port 3000
app.listen(port,()=>console.info(`listen on port ${port}`))