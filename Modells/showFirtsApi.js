import {secondApi} from "./secondApi.js"
import {thirdApi  }from "../Modells/thirdApi.js"
import { fourthApi } from "../Modells/fourthApi.js"

export function showFirtsApi (data){
    //Insercion de datos
    console.log(data);
    const ID = data.contents[0].video.videoId;
    const CANAL = data.contents[0].video.author.title
    const DESCRIPCION = data.contents[0].video.descriptionSnippet;
    const TITULO = data.contents[0].video.title;
    const LOGO = data.contents[0].video.author.avatar[0].url
    document.getElementById("video").src =`https://www.youtube.com/embed/${ID}`;
    document.getElementById("nombreCanal").textContent = CANAL
    document.getElementById("descripcion").textContent = DESCRIPCION
    document.getElementById("tituloVideo").textContent = TITULO
    document.getElementById("canal-logo").src =`${LOGO}`
    secondApi(ID)
    thirdApi(ID)
    fourthApi(ID)
} 
