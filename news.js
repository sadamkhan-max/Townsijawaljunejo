// NEWS SYSTEM
function loadNews() {
    let news = JSON.parse(localStorage.getItem("news")) || [];
    let container = document.getElementById("newsContainer");
    container.innerHTML = "";
    news.reverse().forEach(item => {
        container.innerHTML += `
            <div>
                <h4>${item.title}</h4>
                <p>${item.content}</p>
            </div>
        `;
    });
}
loadNews();

// GALLERY IMAGES
let images = [
    "https://via.placeholder.com/1000x500/003366/ffffff?text=Sijawal+Junejo+1",
    "https://via.placeholder.com/1000x500/00509e/ffffff?text=Sijawal+Junejo+2",
    "https://via.placeholder.com/1000x500/0074cc/ffffff?text=Sijawal+Junejo+3"
];

let idx = 0;
setInterval(() => {
    document.getElementById("slide").src = images[idx];
    idx = (idx + 1) % images.length;
}, 3000);
