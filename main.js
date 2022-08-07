var filterContainer = document.querySelector(".btn__list");
var galleryItems = document.querySelectorAll(".gallery-item");


filterContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn")) {
        filterContainer.querySelector(".active").classList.remove("active");

        e.target.classList.add("active")

        const filterValue = e.target.getAttribute("data-filter");

        galleryItems.forEach((item) => {

            if (item.classList.contains(filterValue) || filterValue === 'projet') {
                item.classList.remove("hide");
                item.classList.add("show");
            }

            else {
                item.classList.remove("show");
                item.classList.add("hide");
            }

        });
    }
});