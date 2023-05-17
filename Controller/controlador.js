import {createQueryString} from "../Modells/toSearch.js"
import { firstApi } from "../Modells/firstApi.js";

document.querySelector("#buscadorB").addEventListener("click",()=>{
    const BUSCADOR = document.querySelector("#buscador").value;
    const BUSQUEDA = createQueryString(BUSCADOR);
    console.log(BUSQUEDA);
    firstApi(BUSQUEDA);
    
})

