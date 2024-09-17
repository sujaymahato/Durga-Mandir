// Function to open a modal
function openGallery(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}

// Function to close a modal
function closeGallery(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modals = document.querySelectorAll('.custom-modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

// Function to handle fullscreen image view
function openFullscreenImage(src) {
    const overlay = document.createElement('div');
    overlay.className = 'fullscreen-overlay';
    const image = document.createElement('img');
    image.src = src;
    image.className = 'fullscreen-image';
    const closeBtn = document.createElement('span');
    closeBtn.className = 'close';
    closeBtn.innerHTML = '&times;';

    // Create and style the download button
    const downloadBtn = document.createElement('a');
    downloadBtn.href = src;
    downloadBtn.download = ''; // Initiates download
    downloadBtn.className = 'download-btn';
    downloadBtn.textContent = 'Download';

    closeBtn.onclick = function() {
        overlay.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(overlay);
        }, 300); // Match the transition duration
    };

    overlay.appendChild(closeBtn);
    overlay.appendChild(image);
    overlay.appendChild(downloadBtn); // Add the download button to the overlay
    document.body.appendChild(overlay);

    // Trigger the transition
    setTimeout(() => {
        overlay.classList.add('show');
    }, 10); // Allow time for the overlay to be added to the DOM
}

// Attach event listeners to gallery images for fullscreen view
document.querySelectorAll('.gallery-image').forEach(image => {
    image.onclick = function() {
        openFullscreenImage(this.src);
    };
});
