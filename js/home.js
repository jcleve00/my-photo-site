document.addEventListener('DOMContentLoaded', () => {
    // Set opacity transition for landing page photos when page loads
    const landingPhotos = document.querySelectorAll('.landing-photo');
    landingPhotos.forEach((photo) => {
        photo.style.opacity = "1";
        photo.style.transition = "opacity 2s ease-in";
    });
    
    // Change the size of image container when smaller than desktop
    const topImageContainer = document.getElementById('top-image-container');
    const breakpointLg = window.matchMedia('(min-width: 992px)'); // Media query set to Bootstrap's Lg

    function shrinkTopImageContainer(e) {
        if (e.matches) {
            topImageContainer.style.height = "";
        } else {
            topImageContainer.style.height = "150px";
        }
    }
    // Run function when page loads to get initial state
    shrinkTopImageContainer(breakpointLg);
    // Add event listener for further state changes
    breakpointLg.addEventListener('change', shrinkTopImageContainer);

});