import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector(`[data-header]`);
const headerBg = document.querySelector(`[data-header-bg]`);
const headerCtas = document.querySelectorAll(`[data-header-cta]`);
const headerBurger = document.querySelectorAll(`[data-header-burger]`);


// Shrink header on scroll using GSAP
function headerShrink() {
    const tmln = gsap.timeline({
        scrollTrigger: {
            trigger: `body`,
            start: `top top`,
            scrub: 0.5,
            end: `+=96`
        }
    });
    tmln.from(header, { y:24, duration: 1 })
        .from(headerBg, { opacity:0, duration:1 })
}
headerShrink();


// Change header color based on section color using Intersection Observer 
const sections = document.querySelectorAll(`[data-section]`);
let observerHeight = window.innerHeight - header.offsetHeight;

function headerDarken() {
    header.classList.remove(`color:ink-3`);
    headerBg.classList.remove(`bg:sheet-3`);
    headerBg.classList.remove(`header-shadow-light`);
    header.classList.add(`color:ink-3-i`);
    headerBg.classList.add(`bg:sheet-5-i`);
    headerBg.classList.add(`header-shadow-dark`);
    headerCtas.forEach(cta => {
        cta.classList.remove(`btn:primary`);
        cta.classList.add(`btn:primary-i`);
    });
    headerBurger.forEach(bar => {
        bar.classList.remove(`bg:black`);
        bar.classList.add(`bg:white`);
    });
};

function headerLighten() {
    header.classList.remove(`color:ink-3-i`);
    headerBg.classList.remove(`bg:sheet-5-i`);
    headerBg.classList.remove(`header-shadow-dark`);
    header.classList.add(`color:ink-3`);
    headerBg.classList.add(`bg:sheet-3`);
    headerBg.classList.add(`header-shadow-light`);
    headerCtas.forEach(cta => {
        cta.classList.remove(`btn:primary-i`);
        cta.classList.add(`btn:primary`);
    });
    headerBurger.forEach(bar => {
        bar.classList.remove(`bg:white`);
        bar.classList.add(`bg:black`);
    });
};

const options = {
    root: null,
    rootMargin: `0px 0px -${observerHeight}px 0px`,
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const theme = entry.target.getAttribute(`data-section`);
    if(entry.isIntersecting && theme === `dark`) {
        headerDarken();
    } else if(entry.isIntersecting && theme === `light`) {
        headerLighten();
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

window.addEventListener('resize', () => {
    observerHeight = window.innerHeight - header.offsetHeight;
    observer.rootMargin = ` 0px 0px -${observerHeight}px 0px`;
});