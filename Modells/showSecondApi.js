export function showSecondApi(data){
    //Insertar comentarios
    let comment =  document.querySelector("#todosLosComentarios")
    document.querySelector("#todosLosComentarios").innerHTML= ""
    for (let i = 0; i < 9; i++) {
        let nombre = data.comments[i].author.title
        let comentario = data.comments[i].content
        let imagen = data.comments[i].author.avatar[2].url
        comment.innerHTML += 
        `
        <div class="row">
            <p id="commentUser"><span><img class="user-image" src="${imagen}" alt=""></span><span> <b id="nameUser">${nombre} </b> </span>${comentario}</p>
        </div>`
    }

}