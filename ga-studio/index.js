const icon = document.getElementById("icon")
const link = document.querySelector("link[rel~='icon']");

function titlechange() {
    icon.src = "logo.png"
    link.href = 'logo.png';
    icon.classList.remove("opacity-0")
    setTimeout(() => {
        icon.classList.add("opacity-0")
        setTimeout(() => {
            icon.src = "newlogo.png"
            link.href = "newlogo.png";
            icon.classList.remove("opacity-0")
            setTimeout(() => {
                icon.classList.add("opacity-0")
            }, 3000);
        }, 1000);
    }, 3000);
}
titlechange()
setInterval(titlechange, 8000);