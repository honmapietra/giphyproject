var fetchGifs = (query) => fetch(`https://api.giphy.com/v1/gifs/search?api_key=G3EAFSTPeE8OyJ7DRbFx9MEXEmVvMdZM&q=${query}`)
.then(response => response.json())

const populateImagesData = (images) => {
    const imgcontainer = document.getElementById('img-container');
    imgcontainer.innerHTML = "";

    images.forEach(image => {
        const imageElement = document.createElement("img");
        imageElement.src = image.images.preview_gif.url;
        imageElement.classList.add("mystyle");
        imgcontainer.appendChild(imageElement)
    });
}

async function searchGifs(query) {    
    var gifs = await fetchGifs(query);
  
    populateImagesData(gifs.data)
}



function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;

    const input = form.elements.query;

    const querytxt = input.value;

    searchGifs(querytxt);
}
