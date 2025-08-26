const tabs = document.querySelectorAll('.tabs__tab');
const sections = document.querySelectorAll('.content__section');
const startBtn = document.getElementById("startBtn");
const aboutSection = document.getElementById("about");
const featuresSection = document.getElementById("features");

startBtn.addEventListener("click", (e) => {
    e.preventDefault();
    aboutSection.classList.remove("content__section--active");
    featuresSection.classList.add("content__section--active");
});

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('tabs__tab--active'));
        sections.forEach(s => s.classList.remove('content__section--active'));

        tab.classList.add('tabs__tab--active');
        const targetId = tab.getAttribute('data-target');
        document.getElementById(targetId).classList.add('content__section--active');
    });
});
