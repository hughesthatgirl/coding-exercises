var image1 = 'url(https://picsum.photos/id/1/200/300)';
var image2 = 'url(https://picsum.photos/id/10/200/300)';
var image3 = 'url(https://picsum.photos/id/12/200/300)';
var image4 = 'url(https://picsum.photos/id/2/200/300)';
var images = [image1, image2, image3, image4];
var carouselBox = document.querySelector('.carouselbox');
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');

function changeImage(el, img){
    el.style.backgroundImage = img;
    el.style.backgroundRepeat = 'no-repeat';
    el.style.backgroundPosition = 'center';
    el.style.backgroundSize = 'cover';
}

prevBtn.addEventListener('click', function(event){
    event.stopPropagation();
    for(let i = 0; i < images.length; i++){
        changeImage(carouselBox, images[i]);
    }
});

