
// Set opacity transition for landing page photos when page loads
const landingPhoto = document.querySelector('.landing-photo');

function fadeIn() {
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            landingPhoto.classList.add('loaded');
        });
    });
}
if (landingPhoto) {
    if (landingPhoto.complete && landingPhoto.naturalWidth > 0) {
        fadeIn();
    } else {
        landingPhoto.addEventListener('load', fadeIn);
    }
}

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

