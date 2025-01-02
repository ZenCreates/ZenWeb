const faders = document.querySelectorAll(".fade");
const arrow = document.getElementsByClassName("scroll-icon")[0];

const appearOptions = {
    threshold: 1
};

const appearOnScroll = new IntersectionObserver
(function (entires, appearOnScroll) {
    entires.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

setTimeout(function() {
    arrow.classList.add("appear");
}, 4500);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});