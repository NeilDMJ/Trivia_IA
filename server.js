require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware para parsear JSON
app.use(express.static('public'));


//ruta prncipal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

});

app.post('/api/gemini', async (req, res) => {
    try {
        const { promt, model_Gemini } = req.body;
        const MODEL = model_Gemini || "gemini-2.0-flash";
        const API_KEY = process.env.GEMINI_API_KEY;

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: promt }] }],
                }),
            });

        const data = await response.json();
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})