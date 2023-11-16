document.addEventListener('DOMContentLoaded', function () {
    var middleImage = document.getElementById('middle-image');

    window.addEventListener('scroll', function () {
        if (window.scrollY >500) {
            middleImage.style.opacity = '0';
        } else {
            middleImage.style.opacity = '1';
        }
    });
});