const tl = gsap.timeline();

const h1 = document.querySelector('.hero-up')
const h2 = document.querySelector('.hero-bottom')
tl.from([h1, h2], {
    y: 20,
    opacity: 0,
    stagger: 1,
    // duration: 
    
})
tl.from('header', {
    y: -40,
    opacity: 0,
    stagger: 1
    
})
tl.from('header .nav-link', {
    y: -20,
    opacity: 0,
    stagger: 1,
    ease: 'back',
    duration: .3
    
})
// tl.to('.hero', {

//     opacity: 1,
//     // stagger: 1
    
// })