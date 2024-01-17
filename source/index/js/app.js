// import bootstrap from 'bootstrap';

const item = document.querySelectorAll(".program__item"),
    list = document.querySelectorAll(".program__list"),
    button = document.querySelectorAll(".program__button");


item.forEach((i, index) => {
    i.addEventListener('click', () => {
        if (list[index].classList.contains("hidden")) {
            list[index].classList.remove("hidden");
            list[index].classList.add("show");
            button[index].classList.add("opened");
        } else if (list[index].classList.contains("show")) {
            list[index].classList.remove("show");
            button[index].classList.remove("opened");
            list[index].classList.add("hidden");
        }
    });
});

const buttonPrev = document.getElementById('#button-prev');
const buttonNext = document.getElementById('#button-next');
const videos = Array.from(document.querySelectorAll('.review__video'));

buttonPrev.addEventListener('click', function() {
    const currentIndex = videos.findIndex(video => video.classList.contains('active'));

    videos.forEach(video => {
        video.classList.remove('active');
    });

    const prevIndex = (currentIndex - 1 + videos.length) % videos.length;
    videos[prevIndex].classList.add('active');

    const prevIndexButton = (currentIndex - 1 + buttonCircle.length) % videos.length;
    buttonCircle.forEach(item => {
        item.classList.remove('active');
    })
    buttonCircle[prevIndexButton].classList.add('active');
    
}); 

buttonNext.addEventListener('click', function() {
    const currentIndex = videos.findIndex(video => video.classList.contains('active'));

    videos.forEach(video => {
        video.classList.remove('active');
    });

    const nextIndex = (currentIndex + 1 + videos.length) % videos.length;
    videos[nextIndex].classList.add('active');

    const nextIndexButton = (currentIndex + 1 + buttonCircle.length) % videos.length;
    buttonCircle.forEach(item => {
        item.classList.remove('active');
    })
    buttonCircle[nextIndexButton].classList.add('active');

});

const buttonCircle = document.querySelectorAll('.review__button-circle');

buttonCircle.forEach(function(item) {
    item.addEventListener('click', function () {
        let currentBtn = item;
        let video = currentBtn.getAttribute("data-button");
        let currentVideo = document.querySelector(video);

        if(!currentBtn.classList.contains('active')){
            buttonCircle.forEach(function(item) {
                item.classList.remove('active');
            })
        }
        videos.forEach(function(item) {
            item.classList.remove('active');
        })

        currentBtn.classList.add('active');
        currentVideo.classList.add('active');
        
    })
})


const buttonPrevPhoto = document.getElementById('#button-prev-photo');
const buttonNextPhoto = document.getElementById('#button-next-photo');
const photos = Array.from(document.querySelectorAll('.review__item'));

buttonPrevPhoto.addEventListener('click', function() {
    let currentIndex = photos.findIndex(video => video.classList.contains('active'));
    photos.forEach(photo => {
        photo.classList.remove('active');
    })
    let prevIndex = (currentIndex -1 + photos.length) % photos.length;
    photos[prevIndex].classList.add('active')
})

buttonNextPhoto.addEventListener('click', function() {
    let currentIndex = photos.findIndex(video => video.classList.contains('active'));
    photos.forEach(photo => {
        photo.classList.remove('active');
    })
    let nextIndex = (currentIndex + 1 + photos.length) % photos.length;
    photos[nextIndex].classList.add('active');
})

//Modal

const modalVideoButton = document.querySelector('.header__video-button');
const modal = document.querySelector('.header__modal-container');
const closeVideoButton = document.querySelector('.header__button-close');
const videoElement = document.querySelector('.header__modal-video video');
const headerVideo = document.getElementById('#video-opened');
const videoBackground = document.querySelector('.header__video-background');

modalVideoButton.addEventListener('click', function () {
    addActive();
})

closeVideoButton.addEventListener('click', function() {
    removeActive();
    stopVideo();
})

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        stopVideo();
        removeActive();
    }
});

headerVideo.addEventListener('click', function(){
    addActive();
})

function stopVideo() {
    if (!videoElement.paused) {
        videoElement.pause();
    }
}

function addActive () {
    videoBackground.classList.add('active');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function removeActive () {
    videoBackground.classList.remove('active');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}








