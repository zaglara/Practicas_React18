export const getImagen = async() => {

    try {

        const apiKey = 'IeMTz5QiUl3O53RNPGF3gWmebfSDL4Az';
        const resp   = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        console.error(error);
        return 'No se encontró la imagen';
    }
    
    
    
}



