const API_KEY = "***REMOVED***";
//const MODEL = "gemini-2.5-flash"; // o "gemini-1.5-pro"
//const MODEL = "gemini-2.5-flash";
//const MODEL = "gemini-2.5-flash-lite";
const MODEL = "gemini-2.0-flash";

async function obtenerHeroesIndependencia() {
    const prompt = `
  Dame una lista en formato JSON de los héroes de la independencia de México.
  regresa un array con al menos 5 elementos, usa el siguiente formato:
  {
    "heroes": [
      {
        "nombre": "Nombre del héroe",
        "año_nacimiento": 1780,
        "año_muerte": 1821,
        "descripción": "Breve descripción del héroe"
      }
    ]   
  }
  Solo responde con el JSON, sin texto adicional.
  `;



    const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
            }),
        }
    );

    const data = await response.json();
    console.log("Respuesta cruda:", data);


}

obtenerHeroesIndependencia();