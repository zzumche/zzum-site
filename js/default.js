jQuery(document).ready(function () {
    swiperSlider();
    addClass();
    matchHeight();
});




jQuery('.art-link').on('click', function () {
  if (jQuery('.art-link').html() === 'Art') {
      jQuery('.art-link').addClass('active');
      jQuery('.art-link').removeClass('inactive');
      jQuery('.art').addClass('shown');
      jQuery('.design-link').removeClass('active');
      jQuery('.design').removeClass('shown');
      jQuery('.photo-link').removeClass('active');
      jQuery('.photo').removeClass('shown');
      jQuery('.video-link').removeClass('active');
      jQuery('.video').removeClass('shown');
  } else {
      // jQuery('.design').removeClass('active');
  }        
});

jQuery('.design-link').on('click', function () {
  if (jQuery('.design-link').html() === 'Design') {
      jQuery('.design-link').addClass('active');
      jQuery('.design-link').removeClass('inactive');
      jQuery('.design').addClass('shown');
      jQuery('.art-link').removeClass('active');
      jQuery('.art').removeClass('shown');
      jQuery('.photo-link').removeClass('active');
      jQuery('.photo').removeClass('shown');
      jQuery('.video-link').removeClass('active');
      jQuery('.video').removeClass('shown');
  } else {
      // jQuery('.art').removeClass('active');
  }        
});

jQuery('.photo-link').on('click', function () {
  if (jQuery('.photo-link').html() === 'Photo') {
      jQuery('.photo-link').addClass('active');
      jQuery('.photo-link').removeClass('inactive');
      jQuery('.photo').addClass('shown');
      jQuery('.art-link').removeClass('active');
      jQuery('.art').removeClass('shown');
      jQuery('.design-link').removeClass('active');
      jQuery('.design').removeClass('shown');
      jQuery('.video-link').removeClass('active');
      jQuery('.video').removeClass('shown');
  } else {
      // jQuery('.art').removeClass('active');
  }        
});

jQuery('.video-link').on('click', function () {
  if (jQuery('.video-link').html() === 'Video') {
      jQuery('.video-link').addClass('active');
      jQuery('.video-link').removeClass('inactive');
      jQuery('.video').addClass('shown');
      jQuery('.art-link').removeClass('active');
      jQuery('.art').removeClass('shown');
      jQuery('.design-link').removeClass('active');
      jQuery('.design').removeClass('shown');
      jQuery('.photo-link').removeClass('active');
      jQuery('.photo').removeClass('shown');
  } else {
      // jQuery('.art').removeClass('active');
  }        
});

function matchHeight(){
  //Grab divs with the class name 'match-height'
  var getDivs = document.getElementsByClassName('match-height');

  //Find out how my divs there are with the class 'match-height' 
  var arrayLength = getDivs.length;
  var heights = [];

  //Create a loop that iterates through the getDivs variable and pushes the heights of the divs into an empty array
  for (var i = 0; i < arrayLength; i++) {
      heights.push(getDivs[i].offsetHeight);
  }

   //Find the largest of the divs
  function getHighest() {
    return Math.max(...heights);
  }

  //Set a variable equal to the tallest div
  var tallest = getHighest();

  //Iterate through getDivs and set all their height style equal to the tallest variable
  for (var i = 0; i < getDivs.length; i++) {
      getDivs[i].style.height = tallest + "px";
  }
};

function swiperSlider(){
  if ((jQuery('.swiper-wrapper').length)) {
		var swiper = new Swiper('.swiper', {
    loop: false,
    slidesPerView: 'auto',
    });
	}
};