// window.addEventListener('scroll', function() {
//   const scrollPosition = window.scrollY;
// });

// // put other stuff here like button interactions etc.

// var imageContainer = document.querySelector('.splashSprite');
// var images = ['frame1.png', 'frame2.png', 'frame3.png', 'frame4.png', 'frame5.png', 'frame6.png'];
// var currentIndex = 0;
// var intervalId;
// var animationSpeed = 100; // Animation speed in milliseconds
// var reverseAnimation = false; // Indicates if the animation should play in reverse

// function changeBackgroundImage() {
//   if (reverseAnimation) {
//     currentIndex = (currentIndex - 1 + images.length) % images.length; // Iterate backwards
//   } else {
//     currentIndex = (currentIndex + 1) % images.length; // Iterate forwards
//   }
//   imageContainer.style.backgroundImage = 'url(../static/img/graphics/splash/' + images[currentIndex] + ')';
// }

// imageContainer.addEventListener('mouseenter', function() {
//   clearInterval(intervalId);
//   intervalId = setInterval(changeBackgroundImage, animationSpeed); // Set animation speed here
// });

// imageContainer.addEventListener('mouseleave', function() {
//   clearInterval(intervalId);
//   imageContainer.style.backgroundImage = 'url(../static/img/graphics/splash/' + images[0] + ')'; // Reset to default state
// });

// imageContainer.addEventListener('click', function() {
//   reverseAnimation = !reverseAnimation; // Toggle the animation direction on click
// });