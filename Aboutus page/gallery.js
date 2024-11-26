// Open image or video in fullscreen when clicked
document.querySelectorAll('.grid-item img, .grid-item video').forEach(item => {
    item.addEventListener('click', () => {
        if (item.requestFullscreen) {
            item.requestFullscreen();
        } else if (item.webkitRequestFullscreen) { /* Safari */
            item.webkitRequestFullscreen();
        } else if (item.msRequestFullscreen) { /* IE11 */
            item.msRequestFullscreen();
        }
    });
});
