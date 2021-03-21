/* const http = require('http');
http.createServer((req,res)=>{
    res.end('Hello World');
}).listen(3000); */ // SERVIDOR CON NODE

//LEVANTANDO UN SERVER CON EXPRESS
    // PRIMERO DEBO INICIAR NODE HE INSTALAR EXPRESS por consola
    //npm init
    //npm i express
const express = require('express'); //invoco modulo express/lo instacio
const morgan = require('morgan');
const app = express(); // inicializo la funcion express en la constante app

//requiriendo rutas

const routes = require('./routers');
const routesApi = require('./routes-api');

//settings***********************************************
//NOMBRE DE LA APP
app.set('appName', 'MI PRIMER SERVER');
app.set('views', __dirname + '/views' );
//DIRECTORIO
//console.log(__dirname + '/views');

app.set('view engine', 'ejs');

//**************************************************************** */
//Middleware -de arriba hacia abajo-pequeñas porciones de codigo funcional para procesar peticiones
//autorizacion - login- colocar cabeceras
//funciones apuntadores

//-funciones que son activadas por capas de routing de express

app.use(morgan('dev'));

/*     app.use(function(req,res,next) {
        console.log('request url: ' + req.url);
        next(); // middleware para que pueda continuar
    }) */

app.use((req,res,next)=>{
    console.log('ha pasado por esta funcion');
    next();
})


//ROUTES********************************************
//para peticiones get (peticion-req lo que recibe el nav,respuesta-res lo que responde el nav)
app.use(routes);
app.use('/api', routesApi);
app.get('*', (req,res)=>{
    res.end('Archivo no encontrado');
})

//// pongo en escucha el servidor en el puerto 3000
app.listen(3000,( )=>{
    console.log('Servidor funcionando');
    console.log('Nombre de la app: ', app.get('appName'));// NOMBRE DE LA APP
}); 
