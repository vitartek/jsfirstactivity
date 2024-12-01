function upDate(previewPic) {
    let imageSect = document.getElementById("image");
    imageSect.style.backgroundImage = "url('" + previewPic.src + "')";
    imageSect.innerHTML = previewPic.alt;
}

function unDo() {
    let imageSect = document.getElementById("image");
    imageSect.style.backgroundImage = "";
    imageSect.innerHTML = "Hover over an image below to display here.";
}