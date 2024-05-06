<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Slideshow</title>
<style>
    .slideshow-container {
        position: relative;
        max-width: 100%;
    }
    .mySlides {
        display: none;
    }
    .prev, .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        margin-top: -22px;
        padding: 16px;
        color: white;
        font-weight: bold;
        font-size: 18px;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        user-select: none;
    }
    .next {
        right: 0;
        border-radius: 3px 0 0 3px;
    }
    .prev:hover, .next:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
</style>
</head>
<body>

<div class="slideshow-container">
    <div class="mySlides">
        <img src="image1.jpg" style="width:100%">
    </div>
    <div class="mySlides">
        <img src="image2.jpg" style="width:100%">
    </div>
    <!-- More slides can be added here -->

    <a class="prev" onclick="plusSlides(-1)">❮ Previous</a>
    <a class="next" onclick="plusSlides(1)">Next ❯</a>
</div>

<script>
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
</script>

</body>
</html>
