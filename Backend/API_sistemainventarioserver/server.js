import express from 'express';
import cors from 'cors';
import db from './app/config/db.js';
import computadora from './app/routes/computadora.js';
import telefono from './app/routes/telefono.js';
import impresora from './app/routes/impresora.js';
import usuario from './app/routes/usuario.js';



const app = express();

app.use(cors());
//habilitar el uso del json 
app.use(express.json());
// //habilitar el envio de data atraves de los formularios (body) y urls
app.use(express.urlencoded({extended:true}));

app.get("/", (req,res)=> {
    res.json({mensaje: "😀😀 Bienvenido al API de un Sistema de Inventario parael area de sistemas💻"})
})

// agregar rutas de computadora
app.use('/' , computadora );
app.use('/' , telefono );
app.use('/' , impresora );
app.use('/' , usuario );




const PORT = process.env.PORT || 3001;
app.listen(PORT, ()  =>
console.log( `El Servidor Esta Corriendo 🛺... En El Puerto http://localhost:${PORT} ` ))

//controlar la conexion
try {
 await db.authenticate()
    console.log( '---> Servidor esta listo para ser explotado 🌷')
    db.sync()
    console.log( '------> la base de datos se ha sincornizado 🐱‍🐉' )
} catch (error) {
    console.error( '⚠️ ⚠️  conexion fracasada....  ⚠️  ⚠️' )
};