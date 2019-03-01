const nadav = document.getElementById('js-nadav');
const aviv = document.getElementById('js-aviv');
const photoBig = document.getElementsByClassName('person-img');
const photoSmall = document.getElementsByClassName('not-active');
const text = document.getElementsByClassName('text-about-person');
const scrollBtn = document.getElementsByClassName('scroll-link');
const welcome =document.getElementsByClassName('welcome-section');
const whereToScroll=document.getElementById('we-are');

//Scroll
scrollBtn[0].addEventListener('click', () => scroll());
function scroll() {
    const distanceToGo = whereToScroll.getBoundingClientRect().top;
    window.scrollBy({ left: 0, top: distanceToGo, behavior: "smooth" });
    
 }

// hover
nadav.addEventListener('mouseenter', function () {
    openMoreInfo()

});
aviv.addEventListener('mouseenter', function () {
    openMoreInfo()

});
nadav.addEventListener('mouseleave', function () {
    closeMoreInfo()

});
aviv.addEventListener('mouseleave', function () {
    closeMoreInfo()

});
function openMoreInfo() {
    let clickedBoxId = event.target.dataset.id;

        for (let i of photoBig) {
            if (i.dataset.id == clickedBoxId) {
                i.style.display = "none";
            }
        }
        for (let j of photoSmall) {

            if (j.dataset.id == clickedBoxId) {
                j.classList.add('active');
                j.style.display = "block";
            }
        }
        for (let k of text) {
            if (k.dataset.id == clickedBoxId) {
                k.style.display = "block";
            }
        }
    }


function closeMoreInfo(){
    let clickedBoxId = event.target.dataset.id;
    event.target.classList.remove('active');

    for (let i of photoBig) {
        if (i.dataset.id == clickedBoxId) {
            i.style.display = "block";
        }
    }
    for (let j of photoSmall) {
        if (j.dataset.id == clickedBoxId) {
            j.style.display = "none";
        }
    }
    for (let k of text) {
        if (k.dataset.id == clickedBoxId) {
            k.style.display = "none";
        }
    }
}