const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelector(selector)

// private key 055dc9a6047b698d96eff49136cf3070cb6e0542
// Public Key 7c0112ad98b6b48854fbca42de4a76e2
// authorized refererrers  developer.marvel.com

// request url https://gateway.marvel.com:443/v1/public/characters?apikey=7c0112ad98b6b48854fbca42de4a76e2

//MD5 4f7f310ee95f215ee6333f0ec1646ae8


// URLS BASE - TS - PUBLICK KEY - HASH (GENERADOR MD5)


//FUNCION ASINCRONA

//http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150


//variables scope
const urlBase = `http://gateway.marvel.com/v1/public`
let ts = `ts=1`
const publicKey = "&apikey=7c0112ad98b6b48854fbca42de4a76e2"
const hash = "&hash=4f7f310ee95f215ee6333f0ec1646ae8"
                    


const getMarvelCharacters = async () =>{
    const url =`${urlBase}characters?${ts}${publicKey}${hash}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.data.results);
}
getMarvelCharacters()


const getMarvelComics = async (title) =>{
    let titleexist = title?title:`&title=${title}`:""
    const url =`${urlBase}comics?${ts}${publicKey}${hash}${titleexist}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.data.results);
    return data.data.results
    }
    getMarvelComics()

// LA FILTRACION POR COMIC
// IMPRIMIR COMIC E IMPRIMIR PERSONAJES
//EN PANTALLA DE COMICS TENER BUSCADOR Y FILTRAR COMICS POR TITULO

const printComic = async () => {
    const comics = await getMarvelComics();
    $(".comic-cards").innerHTML = "";

    for (let comic of comics) {
        $(".comic-cards").innerHTML += `
            <div class="comic-cards grid grid-cols-5 gap-4">
                <img src="" alt="">
                <p>${comic.title}</p>
                <p>Genero</p>
                <p>Status: <span class="font-light"></span></p>
            </div>`;
    }
}

// filtramos
$(".input-search").addEventListener("input", () => console.log($(".input-search").value));





