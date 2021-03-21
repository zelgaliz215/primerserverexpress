/* const http = require('http');
http.createServer((req,res)=>{
    res.end('Hello World');
}).listen(3000); */ // SERVIDOR CON NODE

//LEVANTANDO UN SERVER CON EXPRESS
    // PRIMERO DEBO INICIAR NODE HE INSTALAR EXPRESS por consola
    //npm init
    //npm i express
const express = require('express'); //invoco modulo express/lo instacio
const app = express(); // inicializo la funcion express en la constante app
//para peticiones get (peticion-req lo que recibe el nav,respuesta-res lo que responde el nav)
app.get('/', (req,res)=>{
    res.end('hello world');
});

app.listen(3000,( )=>{
    console.log('Servidor funcionando');
}); // pongo en escucha el servidor en el puerto 3000
