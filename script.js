const menuBars = document.querySelector("#menu-bars");
const overlay = document.querySelector("#overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");
const navArray = [nav1,nav2,nav3,nav4,nav5];

function navAnimation(direction1,direction2,side1,side2){
    overlay.classList.remove(`overlay-slide-${side1}`);
    overlay.classList.add(`overlay-slide-${side2}`);
    navArray.forEach((nav,i)=>{
        nav.classList.remove(`slide-${direction1}-${i+1}`);
        nav.classList.add(`slide-${direction2}-${i+1}`);
    })
}

function toggleNav(){
    menuBars.classList.toggle('change');
    // toggle menu
    overlay.classList.toggle('overlay-active');
    overlay.classList.contains('overlay-active')?navAnimation('out','in','left','right'):navAnimation('in','out','right','left');
}

menuBars.addEventListener('click', toggleNav);
navArray.forEach((nav)=> nav.addEventListener('click',toggleNav));