const rt      = require('request-promise');
const cheerio = require('cheerio')
const express = require('express')
const server  = express()
server.use(express.json());
server.use(express.urlencoded({
    extended:true
}))

server.post('/getresult',(req , res)=>{
       rt({
       url:`http://outcome-ipu.herokuapp.com/find/${req.body.roll}`,
       json:true
   }).then((data)=>{
       res.send(data)
   }).catch((err)=>{
       res.send({error:err})
   })

})

server.listen(1221,()=>{
    console.log("http://localhost:1221/getresult")
})
