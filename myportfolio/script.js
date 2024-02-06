document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");

    for (const link of links) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        window.scroll({
            behavior: "smooth",
            left: 0,
            top: targetElement.offsetTop,
        });
    }
});
