const form = document.querySelector('#searchFrom')
const input = document.querySelector('input');
let container = document.querySelector('.grid');
form.addEventListener('submit', async(e) => {
    e.preventDefault();
    let searchTerm = input.value;
    const config = {params: {q: searchTerm }, headers: {Accept: 'application/json'}};

    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    // const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    // console.dir(res);
    makeImgs(res.data);
    // searchTerm = '';    


})

const makeImgs = (shows) => {
    container.innerText = ''; // remove all previous images
    for(let result of shows){
        if(result.show.image) {
            const div = document.createElement('DIV');
            const img = document.createElement('IMG');
            
            img.src = result.show.image.medium;
            div.append(img);
            container.append(div);
        }
    }
}