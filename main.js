const tl = gsap.timeline();

const h1 = document.querySelector('.hero-up')
const h2 = document.querySelector('.hero-bottom')
tl.from([h1, h2], {
    y: 20,
    opacity: 0,
    stagger: 1,
    scrub: true
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
    stagger: .1,
    ease: 'circ',
    duration: .3
    
})
tl.from('.hero-svg', {
   
    opacity: 0,
    stagger: 1,
    ease: 'back',
    duration: .3
    
})

// tl.to('.hero', {

//     opacity: 1,
//     // stagger: 1
    
// })

gsap.registerPlugin(ScrollTrigger);
const sec2 = gsap.timeline()


sec2.from('.section-2 .display-3', {
    y: 50,
    x: 50,
    opacity: 0,
    duration: .5,
    scrollTrigger: {
      trigger: '.section-2',
      start: 'top center',
      end: 'bottom 90%',
      scrub: true
    }
  });
  sec2.from('.section-2 p', {
    y: 100,
    x: -50,
    opacity: 0,
    duration: .5,
    scrollTrigger: {
      trigger: '.section-2',
      start: 'top center',
      end: 'bottom 90%',
      scrub: true
    }
  });

  const sec3 = gsap.timeline()


sec2.from('.section-3 .dividers-top', {
    y: -50,

    opacity: 0,
    duration: .5,
    scrollTrigger: {
      trigger: '.section-3',
      start: 'top center',
      end: 'bottom 90%',
      scrub: true
    }
  });
  sec2.from('.section-3 .dividers', {
    y: 100,

    opacity: 0,
    duration: .5,
    scrollTrigger: {
      trigger: '.section-3',
      start: 'top center',
      end: 'bottom 90%',
      scrub: true
    }
  });