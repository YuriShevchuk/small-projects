const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");
const body = document.querySelectorAll('body>*>*:not(div), body>*:not(nav), body');

toggle.addEventListener("click", () => {
	document.body.classList.toggle("show-nav");
});

open.addEventListener("click", () => {
    modal.classList.add("show-modal");
    document.body.classList.remove('show-nav');
});

close.addEventListener("click", () => {
    modal.classList.remove("show-modal");

});
// close modal on outside click
window.addEventListener('click', e => {
    e.target === modal ? modal.classList.remove('show-modal') : false
});
// close nav on outside click
window.addEventListener('click', e => {
    for(let i = 0; i < body.length; i++) {
        e.target === body[i] ? document.body.classList.remove('show-nav') : false
    }
});