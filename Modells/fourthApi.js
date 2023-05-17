import { showFourthApi } from "../Modells/showFouthApi.js"

export async function fourthApi(ID) {
    const url =`https://youtube138.p.rapidapi.com/video/related-contents/?id=${ID}&hl=en&gl=US`;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "0de42b048dmsh08314d7460e5897p1bafb8jsn2c27b78aebe1",
            "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        showFourthApi(result)
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
