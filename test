import axios from "axios";

async function fetchAndPrepareComponent() {
    try {
        // Paso 1: Descargar el archivo remoto
        const response = await axios.get("https://random-word-api.herokuapp.com/word");
        console.log(response.data);
    } catch (error) {
        console.error("Error al cargar el componente remoto:", error);
    }
}

export default fetchAndPrepareComponent;
