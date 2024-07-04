import express from "express"
const app = express()
const port = 4000

app.use('/',(req,res)=>{
    res.send("Hola Mundo mascotas")
})

app.listen(port,()=>{
    console.log("Inicio de servidor")
})