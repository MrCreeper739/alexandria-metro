const sections = document.getElementsByClassName("section");

const sectionsObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            for (let i = 0; i < sections.length; i++) {
                if (entry.target == sections[i]) {

                    sections[i].style.opacity = `1`;
                    sections[i].style.transform = `translateY(0)`;
                }
            }
        }
    });
});


for (let i = 0; i < sections.length; i++) {
    sectionsObserver.observe(sections[i]);
}