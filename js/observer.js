const faders = document.querySelectorAll(".fade");

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

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});