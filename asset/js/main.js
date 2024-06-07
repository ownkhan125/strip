// document.querySelector('button').addEventListener('click', () => {
//     alert('Payment Process Initiated!');
// });

document.addEventListener('DOMContentLoaded', function () {

    const menubar = document.getElementById('navopen');
    const togglebtn = document.querySelector('.toggle-btn')


    togglebtn.addEventListener('click', () => {
        menubar.classList.toggle('open');







    });
});




function opencard(n) {
    const tak = document.getElementsByClassName('tak')
    const side = document.getElementsByClassName('side')

    for (i = 0; i < tak.length; i++) {
        tak[i].classList.add('hidden');
    }

    for (i = 0; i < side.length; i++) {
        side[i].classList.add('hidden');
    }
    document.getElementById("tak" + n).classList.remove("hidden");
    document.getElementById("side" + n).classList.remove("hidden");

}



// document.querySelectorAll('.logo-btn').forEach((btn)=>{
//     btn.addEventListener('click', (e)=>{
//         let bgImage = e.target.dataset.img;
//         document.querySelector('#bg-image').src = '/asset/image/' + bgImage;
//         console.log(bgImage);
//     })
// });

// let image = document.querySelector('#bg-image');
// console.log(image);



$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        autoWidth: true,
        loop: true,
        center: true,
        margin: 20,
        autoplay: true,
        slideTransition: 'linear',
        autoplaySpeed: 5000,
        rtl: true,
    });
});

//   document.addEventListener('scroll', (e)=>{
//     console.log(window.screenY);
// })
function checkVisibility() {
    var div1 = document.getElementById('div1');
    var div2 = document.getElementById('div2');
    var div3 = document.getElementById('div3');
    var div4 = document.getElementById('div4');
    var div5 = document.getElementById('div5');

    var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');
    var img3 = document.getElementById('img3');
    var img4 = document.getElementById('img4');
    var img5 = document.getElementById('img5');


    if (isElementInViewport(div1)) {
        img1.classList.add('show');
        img2.classList.remove('show');
        img3.classList.remove('show');
        img4.classList.remove('show');
        img5.classList.remove('show');



    } else if (isElementInViewport(div2)) {
        img1.classList.remove('show');
        img2.classList.add('show');
        img3.classList.remove('show');
        img4.classList.remove('show');
        img5.classList.remove('show');

    }

    else if (isElementInViewport(div3)) {
        img1.classList.remove('show');
        img2.classList.remove('show');
        img3.classList.add('show');
        img4.classList.remove('show');
        img5.classList.remove('show');

    }

    else if (isElementInViewport(div4)) {
        img1.classList.remove('show');
        img2.classList.remove('show');
        img3.classList.remove('show');
        img4.classList.add('show');
        img5.classList.remove('show');

    }


    else if (isElementInViewport(div5)) {
        img1.classList.remove('show');
        img2.classList.remove('show');
        img3.classList.remove('show');
        img4.classList.remove('show');
        img5.classList.add('show');
    }




    // else {
    //     image1.style.display = 'none';
    //     image2.style.display = 'none';
    // }
}

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);
window.addEventListener('load', checkVisibility);