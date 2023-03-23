// Add animation to the photos
const photos = document.querySelectorAll('.photos img');
photos.forEach(photo => {
  photo.classList.add('animate__animated', 'animate__fadeIn');
  
// Add a click event listener to each photo
  photo.addEventListener('click', () => {
    photo.classList.toggle('animate__animated', 'animate__heartBeat');
  });
});

