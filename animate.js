gsap.registerPlugin(ScrollTrigger)

gsap.from('.title', {
    y: 150, opacity: 0, duration: 3, delay: 1
})
gsap.from('.title1', {
    scrollTrigger:{
        trigger: '.title1',
        toggleActions: "restart none none none"
    },
    x: -100, opacity: 0, duration: 0.78, ease: 'power1.out'
})
gsap.from('.text1', {
    y: 130, opacity: 0, duration: 3.75, delay: 1.5
})
gsap.from('.flag',{
    y: -150, opacity: 0, duration:2
})
gsap.from('.navbar-links', {
    x: 250, opacity: 0, duration: 2
})
ScrollTrigger.create({
    trigger: '.container',
    start:"center center",
    end: "+=870",
    pin: true,
    pinSpacing: false,
    scrub: true,
    snap: true,
})
gsap.fromTo('.year', 
    {y: -100, opacity: 0},
    {y: 90, opacity: 0.35, duration: 2})

gsap.fromTo('.abtitle', {
        y: 130, opacity: 0
    },{y: -100, opacity: 1, duration: 3.75, delay: 1.5})    
gsap.fromTo('.abtext1', {
        y: 130, opacity: 0
    },{y: -100, opacity: 1, duration: 3.75, delay: 2})
gsap.fromTo('.about', 
        {y: -150, opacity: 0, duration: 2, delay: 1},
        {y: -45, opacity: 0.35, duration: 2})
gsap.fromTo('.class_img', 
    {scrollTrigger:{
        trigger: '.title1',
        toggleActions: "restart none none none",
    },
        x: 100, opacity: 0}, 
    {scrollTrigger:{
        trigger: '.title1',
        toggleActions: "restart none none none"
    },
        x: 5, opacity: 1, duration: 2})
gsap.fromTo('.text2', 
    {scrollTrigger:{
        trigger: '.text2',
        toggleActions: "restart none none none"
    },
    y: -50, opacity: 0}, 
    {scrollTrigger:{
        trigger: '.text2',
        toggleActions: "restart none none none"
    },
    y: 5, opacity: 1, duration: 1})

gsap.fromTo('.cleft', {
    scrollTrigger:{
        trigger: '.card-container',
        toggleActions: "restart none none none"
    }, y: -50, opacity: 0},{scrollTrigger:{
        trigger: '.card-container',
        toggleActions: "restart none none none"
    }, y: 0, opacity: 1, duration: 3
})
gsap.fromTo('.cright', {
    scrollTrigger:{
        trigger: '.card-container',
        toggleActions: "restart none none none"
    }, y: 50, opacity: 0},{scrollTrigger:{
        trigger: '.card-container',
        toggleActions: "restart none none none"
    }, y: 0, opacity: 1, duration: 3
})
gsap.fromTo('.cright', {
    scrollTrigger:{
        trigger: '.card-container',
        toggleActions: "restart none none none"
    }, y: 50, opacity: 0},{scrollTrigger:{
        trigger: '.card-container',
        toggleActions: "restart none none none"
    }, y: 0, opacity: 1, duration: 3
})
gsap.fromTo('.footer', {
    scrollTrigger:{
        trigger: '.footer',
        toggleActions: "play none none none"
    }, y: 0, opacity: 0},{scrollTrigger:{
        trigger: '.footer',
        toggleActions: "restart none none none"
    }, y: 0, opacity: 1, duration: 2
})

console.log("May I be Your BoyFriend? HM751?")