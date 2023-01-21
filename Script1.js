
window.onload = () => {
    // (A) GET LIGHTBOX & ALL .ZOOMD IMAGES
    let all = document.getElementsByClassName("zoomA"),
        lightbox = document.getElementById("lightbox");

    // (B) CLICK TO SHOW IMAGE IN LIGHTBOX
    // * SIMPLY CLONE INTO LIGHTBOX & SHOW
    if (all.length > 0) {
        for (let i of all) {
            i.onclick = () => {
                let clone = i.cloneNode();
                clone.className = "";
                lightbox.innerHTML = "";
                lightbox.appendChild(clone);
                lightbox.className = "show";
            };
        }
    }
    lightbox.onclick = () => {
        lightbox.className = "";
    };
};