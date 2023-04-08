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


    // add action button animation
    const button = document.querySelector(".action-btn");
    const banner = document.querySelector(".banner");

    // global open/close functions
    const open = () => {
        button.classList.add("open-button");
        banner.classList.add("open-banner");
    }
    const close = () => {
        button.classList.remove("open-button");
        banner.classList.remove("open-banner");
    }

    // check click on button
    button.addEventListener("mousedown",  () => {
        if (!button.classList.contains("open-button")) {
            open()
        }
        else {
            close()
        }
    });

    // close when user clicks outside
    document.body.addEventListener("mousedown", (e) => {
        let isClickInsideButton = button.contains(e.target);
        let isClickInsideBanner = banner.contains(e.target);

        if (!isClickInsideButton && !isClickInsideBanner) {
            close ();
        }
    });

});