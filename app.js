var express=require("express");
var bodyParser=require("body-parser");

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gfg');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})

var app=express()


app.use(bodyParser.json());
app.uss(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/sign_up', function(req,res){
   var  Email = req.dody. Email;
   var  Phone  = req.dody.Phone;
   var  Name  = req.dody.Name;
   var  Traffic  = req.dody.Traffic;

   var data = {
    "Email": Email,
    "Phone": Phone,
    "Name":Name,
    "Traffic":Traffic
}
db.collection('details').insertOne(data,function(err, collection){
    if (err) throw err;
    console.log("Record inserted Successfully");

});

return res.redirect('signup_success.html');

})
 
 
app.get('/',function(req,res){
res.set({
    'Access-control-Allow-Origin': '*'
});
return res.redirect('index.html');    
}).listen(3000)

console.log("server listening at port 3000");