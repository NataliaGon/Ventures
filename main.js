const nadav = document.getElementById('js-nadav');
const aviv = document.getElementById('js-aviv');
const photoBig = document.getElementsByClassName('person-img');
const photoSmall = document.getElementsByClassName('not-active');
const text = document.getElementsByClassName('text-about-person');
// nadav-clicked

nadav.addEventListener('click', function () {
    openMoreInfo()

});
aviv.addEventListener('click', function () {
    openMoreInfo()

});

function openMoreInfo(){
    let clickedBoxId = event.target.dataset.id;
    if (event.target.classList.contains('active')) {
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
    } else {
        
     
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
}
