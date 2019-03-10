const nadav = document.getElementById('js-nadav');
const aviv = document.getElementById('js-aviv');
const animatedContainerNav = document.getElementsByClassName('animated-container-nadav');
const textHidden = document.getElementsByClassName('text-about-person');
const photoBig = document.getElementsByClassName('person-img');
const photoSmall = document.getElementsByClassName('not-active');
const text = document.getElementsByClassName('text-about-person');
const scrollBtn = document.getElementsByClassName('scroll-link');
const welcome = document.getElementsByClassName('welcome-section');
const whereToScroll = document.getElementById('we-are');
const avivBox=document.getElementsByClassName('aviv');
const nadavBox=document.getElementsByClassName('nadav');
//Scroll
scrollBtn[0].addEventListener('click', () => scroll());
function scroll() {
    const distanceToGo = whereToScroll.getBoundingClientRect().top;
    window.scrollBy({ left: 0, top: distanceToGo, behavior: "smooth" });

}
//click img mobile

nadav.addEventListener('click', function () {
    if (window.innerWidth < 1024) {
        if (animatedContainerNav[0].classList.contains('moveUp')) {
            nadavHide();
        } else {
            avivHide();
            nadavOpen();
        }
    }
});
aviv.addEventListener('click', function () {
    if (window.innerWidth < 1024) {
        if (animatedContainerNav[1].classList.contains('moveUp')) {
            avivHide();
        } else {
            nadavHide();
            avivOpen();
        }
    }
});
function nadavOpen() {
    nadavBox[0].style.height="200vw";
    animatedContainerNav[0].style.transform = "translateY(-150px)"
    animatedContainerNav[0].classList.add('moveUp');
    textHidden[0].style.opacity = '1';
    setTimeout(() => {
        animatedContainerNav[0].classList.remove('moveDown')
    }, 700);
}
function avivOpen() {
    avivBox[0].style.height="200vw";
    animatedContainerNav[1].style.transform = "translateY(-150px)"
    animatedContainerNav[1].classList.add('moveUp');
    textHidden[1].style.opacity = '1';
    setTimeout(() => {
        animatedContainerNav[1].classList.remove('moveDown')
    }, 700);
}
function nadavHide() {
    nadavBox[0].style.height="120vw";
    animatedContainerNav[0].style.transform = "translateY(0)";
    textHidden[0].style.opacity = '0';
    setTimeout(() => {
        animatedContainerNav[0].classList.remove('moveUp');
    }, 700);
}
function avivHide() {
    avivBox[0].style.height="120vw";
    animatedContainerNav[1].style.transform = "translateY(0)"
    textHidden[1].style.opacity = '0';
    setTimeout(() => {
        animatedContainerNav[1].classList.remove('moveUp');
    }, 700);
}


aviv.addEventListener('mouseenter', function () {
    animatedContainerNav[1].style.transform = "translateY(-250px)"
    textHidden[1].style.opacity = '1';

});
aviv.addEventListener('mouseleave', function () {
    animatedContainerNav[1].style.transform = "translateY(0)";
    textHidden[1].style.opacity = '0';

});
nadav.addEventListener('mouseenter', function () {
    animatedContainerNav[0].style.transform = "translateY(-250px)"
    textHidden[0].style.opacity = '1';
});
nadav.addEventListener('mouseleave', function () {
    animatedContainerNav[0].style.transform = "translateY(0)";
    textHidden[0].style.opacity = '0';
});

