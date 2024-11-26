// Select all video elements
const videos = document.querySelectorAll('.video-item video');

// Add event listeners to each video
videos.forEach((video) => {
    video.addEventListener('play', () => {
        // Pause all other videos when one starts playing
        videos.forEach((otherVideo) => {
            if (otherVideo !== video) {
                otherVideo.pause();
            }
        });
    });
});
