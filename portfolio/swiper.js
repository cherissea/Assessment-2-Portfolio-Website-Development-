//Initializes the project slider and its functionality
//Wait until the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', () => {

 //Create a new Swiper instance for the projects section
 const swiperProjects = new Swiper('#swiperer', {
    //Enable continuous looping of slides
    loop: true,
    //spacing between slides
    spaceBetween: 24,
    //Automatically determine the number of visible slides
    slidesPerView: 'auto',
    //Display grab cursor on hover
    grabCursor: true,
    //Set slide transition speed
    speed: 600,
    //Enable clickable pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    //Enable automatic slide transitions
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    }
  });

});