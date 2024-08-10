gsap.from('.title', {y: 150, opacity: 0, duration: 3, delay: 1})
gsap.from('.title1', {y: 15, opacity: 0, duration: 0.78, ease: 'power1.out'})
gsap.from('.text1', {y: 130, opacity: 0, duration: 3.75, delay: 1.5})
gsap.from('.flag',{y: -150, opacity: 0, duration:2})
gsap.from('.navbar-links', {x: 250, opacity: 0, duration: 2})
gsap.fromTo('.year', {y: 100, opacity: 0},{y: -50, opacity: 0.35, duration: 2})
gsap.fromTo('.class_img', {x: -100, opacity: 0}, {x: 5, opacity: 1, duration: 2})
gsap.fromTo('.text2', {y: -50, opacity: 0}, {y: 5, opacity: 1, duration: 1})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
let smoother = ScrollSmoother.create({
    wrapper: ".wrapper",
    content: ".content",
    smooth: 2,
    effects: true,
  });