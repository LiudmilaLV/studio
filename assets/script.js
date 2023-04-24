document.addEventListener("DOMContentLoaded", () => {

    // add FAQ accordion animation
    const accordion = document.querySelectorAll(".content-box");

            accordion.forEach(el => {
                el.addEventListener("click", function() {
                    this.classList.toggle("active-toggle");
                })
            });
    

    // add Yandex maps
    let studioAddr = [52.285126, 104.285143];

    function init() {
        console.log(1)
        let map = new ymaps.Map("map", {
            center: studioAddr,
            zoom: 17
        });
    
        let placemark = new ymaps.Placemark(studioAddr, {}, {
            // iconLayout: "default#image",
            // iconImageHref: "",
            // iconImageSize: [40, 40],
            // iconImageOffset: [, ]
        });

        map.controls.remove("searchControl"); // удаляем поиск
        map.controls.remove("trafficControl"); // удаляем контроль трафика
        map.controls.remove("rulerControl"); // удаляем контрол правил
        map.geoObjects.add(placemark);
    }

    ymaps.ready(init);


    // add "message us" button animation
    const actionButton = document.querySelector(".action-btn");
    const actionBanner = document.querySelector(".banner");

    // global open/close functions
    const open = (button, banner) => {
        button.classList.add("open-button");
        banner.classList.add("open-banner");
    }
    const close = (button, banner) => {
        button.classList.remove("open-button");
        banner.classList.remove("open-banner");
    }

    // check click on button
    actionButton.addEventListener("mousedown",  () => {
        if (!actionButton.classList.contains("open-button")) {
            open(actionButton, actionBanner)
        }
        else {
            close(actionButton, actionBanner)
        }
    });

    // close when user clicks outside
    document.body.addEventListener("mousedown", (e) => {
        let isClickInsideButton = actionButton.contains(e.target);
        let isClickInsideBanner = actionBanner.contains(e.target);

        if (!isClickInsideButton && !isClickInsideBanner) {
            close(actionButton, actionBanner);
        }
    });

    // add "show works" button for Jane
    const janeButton = document.getElementById("jane-button");
    const janeWorks = document.getElementById("jane-works");
    const janeClose = document.getElementById("jane-close-carousel");

    // check click on Jane's "show works" button
    janeButton.addEventListener("mousedown",  () => {
        if (!janeButton.classList.contains("open-button")) {
            open(janeButton, janeWorks)
        }
        else {
            close(janeButton, janeWorks)
        }
    });

    // close when "X" close button is clicked
    janeClose.addEventListener("click", () => close(janeButton, janeWorks));
    
    // close when user clicks outside of Jane's "show works" button
    document.body.addEventListener("mousedown", (e) => {
        let isClickInsideButton = janeButton.contains(e.target);
        let isClickInsideBanner = janeWorks.contains(e.target);

        if (!isClickInsideButton && !isClickInsideBanner) {
            close(janeButton, janeWorks);
        }
    });


    // add "show works" carousel animation for Jane
    const carButtons = document.querySelectorAll("[data-carousel-button]");

    carButtons.forEach(button => {
        button.addEventListener("click", () => {
            const offset = button.dataset.carouselButton === "next" ? 1 : -1;
            const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
            const activeSlide = slides.querySelector("[data-active]");
            let newIndex = [...slides.children].indexOf(activeSlide) + offset;

            if (newIndex < 0) newIndex = slides.children.length - 1;
            if (newIndex >= slides.children.length) newIndex = 0;

            slides.children[newIndex].dataset.active = true;
            delete activeSlide.dataset.active
        })
    })
});