const nadav = document.getElementById('js-nadav');
const aviv = document.getElementById('js-aviv');
const photoBig = document.getElementsByClassName('person-img');
const photoSmall = document.getElementsByClassName('not-active');
const text = document.getElementsByClassName('text-about-person');
const scrollBtn = document.getElementsByClassName('scroll-link');
const welcome = document.getElementsByClassName('welcome-section');
const whereToScroll = document.getElementById('we-are');

//Scroll
scrollBtn[0].addEventListener('click', () => scroll());
function scroll() {
    const distanceToGo = whereToScroll.getBoundingClientRect().top;
    window.scrollBy({ left: 0, top: distanceToGo, behavior: "smooth" });

}
//click img mobile
nadav.addEventListener('click', function () {
    imgClick()
});
aviv.addEventListener('click', function () {
    imgClick()
});
function imgClick(){
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


function closeMoreInfo() {
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
//Form verification

// let btnForm = document.getElementById('btn-form');
// btnForm.addEventListener('click', function () {




//     const mailError = document.getElementById('mail-error');
//     const success = document.getElementById('success');
//     const error = document.getElementById('error');
//     let name = document.getElementById('name');
//     let mail = document.getElementById('mail');
//     let topic = document.getElementById('topic');
//     let message = document.getElementById('message');
//     let phone = document.getElementById('phone');
//     let testForm = 0;
//     let testEmail = 0;



//     let nameValue = name.value.trim();
//     if (nameValue == '') {
//         name.style.border = '2px solid red';
//         error.style.display = "block";
//         success.style.display = "none";
//     } else {
//         testForm += 1;
//         name.style.border = '1px solid #464646';
//         name.style.backgroundColor="#ffffff"
//         if (testForm === 4) {
//             error.style.display = "none";
//         }
//     }
//     let phoneValue = phone.value.trim();
//     const phoneno = /^\d{10}$/;
//     if (phoneValue =='') {
//         phone.style.border = '2px solid red';
//         error.style.display = "block";
//         success.style.display = "none";
//     } else {
//         if (phoneValue.match(phoneno)) {
//             testForm += 1;
//             mail.style.border = '1px solid #464646';
//             if (testForm === 4) {
//                 error.style.display = "none";
//             }
//         }else{
//             phone.style.border = '2px solid red';
//             error.style.display = "block";
//             success.style.display = "none";
//         }
//     }


//         let mailValue = mail.value.trim();
//         if (mailValue == '') {
//             mail.style.border = '2px solid red';
//             error.style.display = "block";
//             success.style.display = "none";
//         } else {
//             testForm += 1;
//             mail.style.border = '1px solid #464646';
//             if (testForm === 4) {
//                 error.style.display = "none";
//             }
//         }
//         if (mailValue.indexOf("@") == -1) {
//             error.style.display = "block";
//             mail.style.border = '2px solid red';
//             success.style.display = "none";
//         }
//         else {
//             testEmail += 1;
//             if (testEmail === 2) {
//                 mailError.style.display = "none";
//                 mail.style.border = '1px solid #464646';
//             }
//         }
//         if (mailValue.indexOf(".") == -1) {
//             error.style.display = "block";
//             mail.style.border = '2px solid red';
//             success.style.display = "none";

//         }
//         else {
//             testEmail += 1;
//             if (testEmail === 2) {
//                 mailError.style.display = "none";
//                 mail.style.border = '1px solid #464646';
//             }
//         }

//         let messageValue = message.value.trim();
//         if (messageValue == '') {
//             message.style.border = '2px solid red';
//             error.style.display = "block";
//             success.style.display = "none";
//         } else {
//             testForm += 1;
//             message.style.border = '1px solid #464646;';
//             if (testForm === 4) {
//                 error.style.display = "none";
//             }
//         }


//         if (testEmail == 2 && testForm == 4) {
//             success.style.display = "block";

//         }

//     });



