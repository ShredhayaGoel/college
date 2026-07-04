function filterImages(category) {

    const images = document.querySelectorAll(".image");

    images.forEach(function (image) {

        if (category === "all") {
            image.style.display = "block";
        }
        else if (image.classList.contains(category)) {
            image.style.display = "block";
        }
        else {
            image.style.display = "none";
        }

    });

}