const express = require('express');
const path = require('path');
const app = express();

const PORT = 3030;

app.use(express.static(path.join(__dirname,'public')));

/* rutas */
app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')))
app.get('/register',(req,res) => res.sendFile(path.join(__dirname,'views','register.html')))
app.get('/logs',(req,res) => res.sendFile(path.join(__dirname,'views','logs.html')))
app.get('/login',(req,res) => res.sendFile(path.join(__dirname,'views','login.html')))
app.get('/shop',(req,res) => res.sendFile(path.join(__dirname,'views','shop.html')))
app.get('/detail',(req,res) => res.sendFile(path.join(__dirname,'views','detail.html')))



app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`))