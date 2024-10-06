/*
  - Variables:
    - Images: Represents a collection of image elements in the slider.
    - CurrentIndex: Represents the index of the currently displayed image.

  - Functions:
    - NextImage(): Displays the next image in the slider.
*/

// Selecting all image elements in the slider
const images = document.querySelectorAll('.slider img');

// Check if there are any images in the slider
if (images.length === 0) {
  console.error('No images found in the slider.');
} else {
  // Initializing the currentIndex variable to 0
  let currentIndex = 0;
  let intervalId;

  // Function to display the next image in the slider
  function nextImage() {
    images[currentIndex].classList.add('hidden'); // Hide current image
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image
    images[currentIndex].classList.remove('hidden'); // Display the new current image
  }

  // Hide all images except the first one
  for (let i = 1; i < images.length; i++) {
    images[i].classList.add('hidden');
  }

  // Start automatic transition to the next image every two seconds
  function startSlideshow() {
    intervalId = setInterval(nextImage, 2000);
  }

  // Stop automatic transition
  function stopSlideshow() {
    clearInterval(intervalId);
  }

  // Add event listeners to pause on hover
  const slider = document.querySelector('.slider');
  slider.addEventListener('mouseenter', stopSlideshow);
  slider.addEventListener('mouseleave', startSlideshow);

  // Start the slideshow initially
  startSlideshow();
}


const articleHeaders = document.querySelectorAll('.article-header');

articleHeaders.forEach(header => {
  let isRead = false;

  header.addEventListener('click', () => {
    const content = header.nextElementSibling;

    if (!isRead) {
      // First click: Change the color and toggle the content
      header.classList.add('read');
      content.style.display = 'block';
      isRead = true;
    } else {
      // Second click: Toggle the content
      content.style.display = content.style.display === 'none' ? 'block' : 'none';
    }
  });

  header.addEventListener('mouseenter', () => {
    if (!isRead) {
      header.classList.add('hover');
    }
  });

  header.addEventListener('mouseleave', () => {
    if (!isRead) {
      header.classList.remove('hover');
    }
  });
});


