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
    container.innerText = ''; // hapus semua gambar dari hasil search sebelumnya
    for(let result of shows){
        if(result.show.image) { //Jika terdapat gambar pada API, maka 
            const div = document.createElement('DIV');
            const img = document.createElement('IMG');
            const div2 = document.createElement ('div');
            div2.textContent = result.show.name;
            div2.classList.add('title')
            img.src = result.show.image.medium;
            div.append(img);
            div.append(div2);
            container.append(div);
        }
    }
}