/* Importaciones de modulos */
const express = require('express');
const path = require('path');
const app = express();

const PORT = 3030;

app.use(express.static(path.join(__dirname,'public')));

/* rutas */
app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')))
/* Registro */
app.get('/register',(req,res) => res.sendFile(path.join(__dirname,'views','register.html')))
/*Logeate */
app.get('/login',(req,res) => res.sendFile(path.join(__dirname,'views','login.html')))
/* Carro de compras */
app.get('/productCart',(req,res) => res.sendFile(path.join(__dirname,'views','productCart.html')))
/*Detalle del producto */
app.get('/productDetail',(req,res) => res.sendFile(path.join(__dirname,'views','detail.html')))

<<<<<<< HEAD
 
=======

>>>>>>> 8b13aaa4e65385148ad3b7fd631cb06378f9d89e

/* Launcher */
app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`))