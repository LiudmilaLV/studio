document.addEventListener("DOMContentLoaded", () => {

    // add FAQ accordion animation
    const accordion = document.querySelectorAll(".content-box");

            accordion.forEach(el => {
                el.addEventListener("click", function() {
                    this.classList.toggle("active-toggle");
                })
            });
    
    // add Yandex maps
    ymaps.ready(init);

    function init() {
        console.log(1)
        let myMap = new ymaps.Map("map", {
            center: [52.285126, 104.285143],
            zoom: 16
        });
    }

});