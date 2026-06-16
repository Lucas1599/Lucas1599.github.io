document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".music-item");

    items.forEach(item => {
        const header = item.querySelector(".music-header");

        header.addEventListener("click", () => {

            const isActive = item.classList.contains("active");

            items.forEach(i => i.classList.remove("active"));

            if (!isActive) {
                item.classList.add("active");
            }
        });
    });

});