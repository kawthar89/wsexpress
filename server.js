const express=require('express')
// initialization serveur
const app=express()
const Port=5000
// creation serveur
app.listen(Port,(err)=>err?console.log(err):console.log(`server is connected ${Port}`));