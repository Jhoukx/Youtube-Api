export function showThirdApi(data){
    const commentSpace = document.querySelector("#descripcion");
    console.log(data.description);
    commentSpace.textContent = data.description
}