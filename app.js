let tl = gsap.timeline();

tl.to("span", { y: 0, duration: 1, stagger: 0.4 });
tl.to(".slider", { y: "-100%", duration: 1, delay: 1 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("header", { opacity: 0 }, { opacity: 1, duration: 1 });
