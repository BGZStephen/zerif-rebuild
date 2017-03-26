var navbar = document.getElementsByClassName(`navbar`)[0]
var navToggle = document.getElementsByClassName(`navbar-toggle`)[0]
var navToggleBars = document.getElementsByClassName(`fa-bars`)[0]
var navToggleBackground = document.getElementsByClassName(`fa-square-o`)[0]
var menuList = document.getElementsByClassName(`navbar-menu`)[0]

var toggle = () => {
  if(menuList.style.maxHeight != "500px") {
    menuList.style.maxHeight = "500px";
    navToggleBackground.classList.remove(`fa-square-o`);
    navToggleBackground.classList.add(`fa-square`);
    navToggleBackground.style.color = `#e96656`;
    navToggleBars.style.color = `white`;
  } else {
    menuList.style.maxHeight = 0;
    navToggleBackground.style.color = `black`;
    navToggleBackground.classList.remove(`fa-square`);
    navToggleBackground.classList.add(`fa-square-o`);
    navToggleBars.style.color = `black`;
  }
}

navToggle.addEventListener(`click`, toggle);

$(document).ready(function(){
  $('.testimonials-items-container').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  });
  $('.blog-items-container').slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            },
        }
    ]
  });

  //Smooth scroll

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
