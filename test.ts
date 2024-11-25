const tests: string = "Facundo";

const fetchAndPrepareComponent = async (): Promise<any> => {

    try {
        console.log(tests)
        // Paso 1: Descargar el archivo remoto
        const response = await fetch("https://random-word-api.herokuapp.com/word");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error al cargar el componente remoto:", error);
    }
}
fetchAndPrepareComponent();
export default fetchAndPrepareComponent;
