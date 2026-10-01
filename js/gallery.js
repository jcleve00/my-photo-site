// Modal event listeners
// Get img modal by id
const imgModal = document.getElementById('img-modal');

// Check if modal exists
if (imgModal) {
    // Get the empty img element inside the modal
    const modalImgElement = imgModal.querySelector('img');
    // Add event listener. When bootstraps show-bs-modal is triggered get 
    // the trigger using relatedTarget, then slice the full src path from 
    // the triggers img element and plug it into the modals image element
    imgModal.addEventListener('show.bs.modal', event => {
        // The thumbnail div that was clicked
        const trigger = event.relatedTarget;
        // The thumbnail
        const triggerImgElement = trigger.querySelector('img');
        // The path to the thumbnail image
        const thumbnailSrcPath = triggerImgElement.getAttribute('src');
        // Slice thumbnails out of the path to get the full image path
        const fullSrcPath = thumbnailSrcPath.replace('thumbnails/', '');

        modalImgElement.setAttribute('src', fullSrcPath);
    });
}
// Toast
document.addEventListener('DOMContentLoaded', () => {
    // Get toast element
    const purchaseToast = document.getElementById('purchaseToast');
    // count to stop the interval
    let count = 0;
    // Check if there is a toest element
    if (purchaseToast) {
        // Set an interval to create a bootstrap toast instance and display the toast after 30sec.
        // Then clear the interval after its run once.
        const intervalId = setInterval(() => {
            count++;
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(purchaseToast);
            toastBootstrap.show();

            if (count === 1) {
                clearInterval(intervalId);
            }
        }, 30000);
    }
});

