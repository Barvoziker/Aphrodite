var modalEle = document.querySelector(".modal");
var modalImage = document.querySelector(".modalImage");
Array.from(document.querySelectorAll(".imgMini")).forEach(item => {
    item.addEventListener("click", event => {
        modalEle.style.display = "block";
        modalImage.src = event.target.src;
    });
});

Array.from(document.querySelectorAll(".Myslides")).forEach(item => {
    item.addEventListener("click", event => {
        modalEle.style.display = "block";
        modalImage.src = event.target.src;
    });
});

document.querySelector(".close").addEventListener("click", () => {
    modalEle.style.display = "none";
});