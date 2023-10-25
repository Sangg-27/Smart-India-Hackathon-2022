function websiteVisits(response) {
  document.querySelector("#visits").textContent = response.value;
}

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//visitor count
var flg = localStorage.getItem('on_load_counter');

if (flg === null) {
  flg = 0;
}

flg++;

localStorage.setItem("on_load_counter", flg);

document.getElementById('incrementCount').innerHTML = flg;
//end visitor count