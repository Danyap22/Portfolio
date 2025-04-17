const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const wrap = document.querySelector('.img-wrap');
const imgs = document.querySelectorAll('.img-wrap img');
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");


// Show the modal when the page is loaded
window.onload = () => {
  modal.classList.add("active");
};

// Close the modal when the user clicks the X button
closeModal.onclick = () => {
  modal.classList.remove("active");
};

//carousell function
let idx = 0;

function showImg() {
    if (idx >= imgs.length) idx = 0;
    if (idx < 0) idx = imgs.length - 1;
    wrap.style.transform = `translateX(-${idx * 100}%)`;
}

next.addEventListener('click', () => {
    idx++;
    showImg();
});

prev.addEventListener('click', () => {
    idx--;
    showImg();
});

setInterval(() => {
    idx++;
    showImg();
}, 3000);

showImg();
 

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

