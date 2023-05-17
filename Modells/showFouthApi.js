export function showFourthApi (data){
    const v1 = data.contents[0].video.videoId;
    const v2 = data.contents[1].video.videoId;
    const v3 = data.contents[2].video.videoId;
    document.getElementById("v1").src =`https://www.youtube.com/embed/${v1}`;
    document.getElementById("v2").src =`https://www.youtube.com/embed/${v2}`;
    document.getElementById("v3").src =`https://www.youtube.com/embed/${v3}`;
}