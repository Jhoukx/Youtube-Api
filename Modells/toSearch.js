export function createQueryString(string){
    let separada =string.split(" ")
    return separada.join("%20");
}
