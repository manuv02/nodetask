const express = require('express')
const app = express()
let json = require('./db.json')
const fileName = './db.json';
const file = require(fileName);
const PORT=8888
const fs = require('fs');
const cors = require('cors');
app.use(cors())
app.use(express.json())


app.get('/api',(req,res)=>{
   
  res.send(JSON.stringify(json))

});


app.post('/api',(req,res)=>{
   console.log(req.body.name)

   let jsonreal = JSON.parse(fs.readFileSync('./db.json'))
   console.log(jsonreal)
  jsonreal.products[0].product[req.body.data][req.body.name]=req.body.content
  console.log(jsonreal)
  let actualdata = String(JSON.stringify(jsonreal)).toLowerCase()
  fs.writeFileSync('./db.json',actualdata)
   
  });

  app.delete('/api/:name',(req,res)=>{
    console.log("sdffffffffffffffffffffffffffffffffffffffffffffffffffffff",req.body)
    let jsonreal = JSON.parse(fs.readFileSync('./db.json'))
    console.log(JSON.stringify(jsonreal))
    jsonreal.products[0].product.productmodel[req.params.name]=""
    let actualdata = String(JSON.stringify(jsonreal)).toLowerCase()
  fs.writeFileSync('./db.json',actualdata)
  })


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })

  
//    
//fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
//  if (err) return console.log(err);
//  console.log(JSON.stringify(file));
//  console.log('writing to ' + fileName);
//});

