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


    // add "show works" carousel animation
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


    // add "show works" button for mylena
    const mylenaButton = document.getElementById("mylena-button");
    const mylenaWorks = document.getElementById("mylena-works");
    const mylenaClose = document.getElementById("mylena-close-carousel");

    // check click on mylena's "show works" button
    mylenaButton.addEventListener("mousedown",  () => {
        if (!mylenaButton.classList.contains("open-button")) {
            open(mylenaButton, mylenaWorks)
        }
        else {
            close(mylenaButton, mylenaWorks)
        }
    });

    // close when "X" close button is clicked
    mylenaClose.addEventListener("click", () => close(mylenaButton, mylenaWorks));
    
    // close when user clicks outside of mylena's "show works" button
    document.body.addEventListener("mousedown", (e) => {
        let isClickInsideButton = mylenaButton.contains(e.target);
        let isClickInsideBanner = mylenaWorks.contains(e.target);

        if (!isClickInsideButton && !isClickInsideBanner) {
            close(mylenaButton, mylenaWorks);
        }
    });

    // add "show works" button for polina
    const polinaButton = document.getElementById("polina-button");
    const polinaWorks = document.getElementById("polina-works");
    const polinaClose = document.getElementById("polina-close-carousel");

    // check click on polina's "show works" button
    polinaButton.addEventListener("mousedown",  () => {
        if (!polinaButton.classList.contains("open-button")) {
            open(polinaButton, polinaWorks)
        }
        else {
            close(polinaButton, polinaWorks)
        }
    });

    // close when "X" close button is clicked
    polinaClose.addEventListener("click", () => close(polinaButton, polinaWorks));
    
    // close when user clicks outside of polina's "show works" button
    document.body.addEventListener("mousedown", (e) => {
        let isClickInsideButton = polinaButton.contains(e.target);
        let isClickInsideBanner = polinaWorks.contains(e.target);

        if (!isClickInsideButton && !isClickInsideBanner) {
            close(polinaButton, polinaWorks);
        }
    });


    // add "show works" button for anastasia
    const anastasiaButton = document.getElementById("anastasia-button");
    const anastasiaWorks = document.getElementById("anastasia-works");
    const anastasiaClose = document.getElementById("anastasia-close-carousel");

    // check click on anastasia's "show works" button
    anastasiaButton.addEventListener("mousedown",  () => {
        if (!anastasiaButton.classList.contains("open-button")) {
            open(anastasiaButton, anastasiaWorks)
        }
        else {
            close(anastasiaButton, anastasiaWorks)
        }
    });

    // close when "X" close button is clicked
    anastasiaClose.addEventListener("click", () => close(anastasiaButton, anastasiaWorks));
    
    // close when user clicks outside of anastasia's "show works" button
    document.body.addEventListener("mousedown", (e) => {
        let isClickInsideButton = anastasiaButton.contains(e.target);
        let isClickInsideBanner = anastasiaWorks.contains(e.target);

        if (!isClickInsideButton && !isClickInsideBanner) {
            close(anastasiaButton, anastasiaWorks);
        }
    });

    // add "show works" button for juliya
    const juliyaButton = document.getElementById("juliya-button");
    const juliyaWorks = document.getElementById("juliya-works");
    const juliyaClose = document.getElementById("juliya-close-carousel");

    // check click on juliya's "show works" button
    juliyaButton.addEventListener("mousedown",  () => {
        if (!juliyaButton.classList.contains("open-button")) {
            open(juliyaButton, juliyaWorks)
        }
        else {
            close(juliyaButton, juliyaWorks)
        }
    });

    // close when "X" close button is clicked
    juliyaClose.addEventListener("click", () => close(juliyaButton, juliyaWorks));
    
    // close when user clicks outside of juliya's "show works" button
    document.body.addEventListener("mousedown", (e) => {
        let isClickInsideButton = juliyaButton.contains(e.target);
        let isClickInsideBanner = juliyaWorks.contains(e.target);

        if (!isClickInsideButton && !isClickInsideBanner) {
            close(juliyaButton, juliyaWorks);
        }
    });

    // add "show works" button for sonya
    const sonyaButton = document.getElementById("sonya-button");
    const sonyaWorks = document.getElementById("sonya-works");
    const sonyaClose = document.getElementById("sonya-close-carousel");

    // check click on sonya's "show works" button
    sonyaButton.addEventListener("mousedown",  () => {
        if (!sonyaButton.classList.contains("open-button")) {
            open(sonyaButton, sonyaWorks)
        }
        else {
            close(sonyaButton, sonyaWorks)
        }
    });

    // close when "X" close button is clicked
    sonyaClose.addEventListener("click", () => close(sonyaButton, sonyaWorks));
    
    // close when user clicks outside of sonya's "show works" button
    document.body.addEventListener("mousedown", (e) => {
        let isClickInsideButton = sonyaButton.contains(e.target);
        let isClickInsideBanner = sonyaWorks.contains(e.target);

        if (!isClickInsideButton && !isClickInsideBanner) {
            close(sonyaButton, sonyaWorks);
        }
    });
});