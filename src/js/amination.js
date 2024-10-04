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