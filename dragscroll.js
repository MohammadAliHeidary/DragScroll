const dragscroll = document.getElementsByClassName('dragscroll');
let firstX  = null,
    scrollX = null,
    firstY  = null,
    scrollY = null;
for (let i = 0; i < dragscroll.length; i++) {
    const element = dragscroll[i];
    element.addEventListener('mousemove', e => {
        if (e.which === 1) {
            if (firstX === null) {
                //* Set initial values ---
                firstX = e.layerX;
                scrollX = element.scrollLeft;
                firstY = e.layerY;
                scrollY = element.scrollTop;
            }
            element.scrollTo({
                // * Calculate and adjust the scroll value ---
                top: scrollY + (firstY - e.layerY),
                left: scrollX + (firstX - e.layerX),
                behavior: "auto"
            });
        }
        else {
            //* Reset the initial values ---
            firstX = null;
            scrollX = null;
            firstY = null;
            scrollY = null;
        }
    });
}
//? Author : https://github.com/MohammadAliHeidary