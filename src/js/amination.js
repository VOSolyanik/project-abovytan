document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll(".lessons-list-item");

    listItems.forEach(item => {
        item.style.visibility = "hidden";
    });

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    target.style.visibility = "visible";

                    if (target === listItems[0]) {
                        target.classList.add("animate__backInLeft");
                    } else if (target === listItems[1]) {
                        target.classList.add("animate__backInDown");
                    } else if (target === listItems[2]) {
                        target.classList.add("animate__backInRight");
                    }
                    observer.unobserve(target);
                }
            });
        },
        {
            threshold: 1.0 
        }
    );

    listItems.forEach(item => {
        observer.observe(item);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll(".about-us-list li");

    listItems.forEach(item => {
        item.style.visibility = "hidden";
    });

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    target.style.visibility = "visible";

                    target.classList.add("animate__slideInLeft");
                    observer.unobserve(target);
                }
            });
        },
        {
            threshold: 1.0 
        }
    );

    listItems.forEach(item => {
        observer.observe(item);
    });
});



document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.brand-underline');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementRect = element.getBoundingClientRect();

        if (elementRect.top < windowHeight * 0.5) {
            element.classList.add('js-animate');
        }
    });
});


document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.proposal-content-wrapper');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementRect = element.getBoundingClientRect();

        if (elementRect.top >= 0 && elementRect.bottom <= windowHeight) {
            element.classList.add('js-animate');
        }
    });
});

