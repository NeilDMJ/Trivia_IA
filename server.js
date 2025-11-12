require('dotenv').config();
const express = require('express');
const path = require('path');

const app =  express();
const PORT = proccess.env.PORT || 3000;

app.use(express.json()); // Middleware para parsear JSON
app.use(express.static('public')); // Servir archivos estáticos desde la carpeta 'public'

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'));
    
});