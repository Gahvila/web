document.addEventListener("DOMContentLoaded", function() {
    var images = ["background1.avif", "background2.avif", "background3.avif", "background4.avif", "background5.avif"]; // Add your image filenames here
    images = shuffleArray(images);
    var imageObjects = [];
    var currentIndex = 0;

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    function preloadImages() {
        for (var i = 0; i < images.length; i++) {
            var img = new Image();
            img.src = "assets/backgrounds/" + images[i];
            imageObjects.push(img);
        }
    }

    function changeBackground() {
        document.getElementById('background').style.opacity = 0;

        setTimeout(function() {
            document.getElementById('background').style.backgroundImage = "url(" + imageObjects[currentIndex].src + ")";

            document.getElementById('background').style.opacity = 1;
        }, 500);

        currentIndex = (currentIndex + 1) % images.length;
        setTimeout(changeBackground, 15000); // Change image every 5 seconds
    }

    preloadImages();
    changeBackground();
});
