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
        const { prompt, model } = req.body;
        const MODEL = model || "gemini-2.0-flash";
        const API_KEY = process.env.GEMINI_API_KEY;

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }]
                })
            });

        const data = await response.json();
        res.json(data);
    }
    catch (error) {
        console.error('Error en /api/gemini:', error);
        res.status(500).json({ error: 'Error al procesar la solicitud', details: error.message });
    }
});

app.post('/api/chatgpt', async (req, res) => {
    try {
        const { prompt, model } = req.body;
        const OPENAI_API_KEY = process.env.CHATGPT_API_KEY; 
        const MODEL = model || 'gpt-3.5-turbo'; //  'gpt-4', 'gpt-3.5-turbo'

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: MODEL,
                messages: [
                    { role: 'user', content: prompt }
                ],
                temperature: 0.7
            })
        });

        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error al generar contenido' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})
