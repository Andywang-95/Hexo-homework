let menu_btn = document.querySelector(".menu-btn");
let close_btn = document.querySelector(".close-btn");
let menu = document.querySelector(".menu");

menu_btn.addEventListener('click', ()=>{
    menu_btn.style.display = "none";
    close_btn.style.display = "block";
    menu.style.display = "block";
    }, false);
close_btn.addEventListener('click', ()=>{
    menu_btn.style.display = "block";
    close_btn.style.display = "none";
    menu.style.display = "none";
    }, false);