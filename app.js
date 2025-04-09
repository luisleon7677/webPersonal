//importamos express
const express = require("express")
//ahora podeos usar expres
const app = express()
//path requerido para mi direcciones
const path = require('path');

//cambiar a extensiones ejs
app.set("view engine","ejs")
// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));




//colocamues nuestra primerva vista
app.get("/", (req,res)=>{
    res.render("index")
})




//subimos nuestro proyeecto a un puerto
app.listen(3000, (rep,res)=>{
    console.log("corriendo en el puerto 3000")
})
