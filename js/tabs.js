document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {

            const tabId = btn.dataset.tab;

            contents.forEach(c => c.classList.remove("active"));
            buttons.forEach(b => b.classList.remove("active"));

            document.getElementById(tabId).classList.add("active");
            btn.classList.add("active");

        });
    });

});