document.addEventListener("DOMContentLoaded", () => {
    const gallerySettings = {
        toolbar: {
            prev: true,
            next: true,
        },
        title: false,
        initialCoverage: 1,
        movable: false,
        url(image) {
            return image.src.replace('thumbs/', '');
        },
    };

    // common mosaic gallery viewer
    let galleryViewer = null;
    let customSettings = {...gallerySettings}
    customSettings.toolbar.close = function () {
        galleryViewer.hide();
    }
    galleryViewer = new Viewer(document.getElementById('gallery'), customSettings);

    let entranceViewer = null;
    let customEntranceSettings = {...gallerySettings}
    customSettings.toolbar.close = function () {
        entranceViewer.hide();
    }
    entranceViewer = new Viewer(document.getElementById('entrance-gallery'), customEntranceSettings);

    // each artist gallery viewer
    const artistGallery = document.querySelectorAll(".show-works");
    artistGallery.forEach(el => {
        el.addEventListener("click", function () {
            const gallery = this.parentElement.parentElement.querySelector(".artist-gallery");
            let viewer = null;

            let customSettings = {...gallerySettings}
            customSettings.toolbar.close = function () {
                viewer.hide();
            }

            viewer = new Viewer(gallery, {
                ...customSettings,
                url: 'data-src',
                hidden: function () {
                    viewer.destroy();
                },
            });

            viewer.show();
        });
    });

    // add FAQ accordion animation
    const accordion = document.querySelectorAll(".content-box");
    accordion.forEach(el => {
        el.addEventListener("click", function () {
            this.classList.toggle("active-toggle");
        })
    });

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

    actionButton.addEventListener("mousedown", () => {
        if (!actionButton.classList.contains("open-button")) {
            open(actionButton, actionBanner)
        } else {
            close(actionButton, actionBanner)
        }
    });

    // init yandex map
    function init() {
        let studioAddress = [52.285126, 104.285143];

        let map = new ymaps.Map("map", {
            center: studioAddress,
            zoom: 17
        });

        let placemark = new ymaps.Placemark(studioAddress, {}, {
            iconLayout: "default#image",
            iconImageHref: "./assets/img/logo-icons/pointer-black.png",
            iconImageSize: [150, 200],
            iconImageOffset: [-55, -105]
        });

        map.controls.remove("searchControl"); // удаляем поиск
        map.controls.remove("trafficControl"); // удаляем контроль трафика
        map.controls.remove("rulerControl"); // удаляем контрол правил
        map.geoObjects.add(placemark);
    }

    ymaps.ready(init);
});
