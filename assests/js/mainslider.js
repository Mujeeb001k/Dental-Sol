
 
  $(document).ready(function(){
    $('.your-class').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true

      });
  });



  $(document).ready(function(){
    $('.ourteam-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true

      });
  });


  $(document).ready(function(){
    $('.ourteam-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: true

      });
  });


  $(document).ready(function(){
    $('.service_slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: false

      });

      $(".sliderNav").click(function(){
        var slide_no = $(this).attr('index');
        $(".sliderNav").removeClass('active');
        $(this).addClass('active');

        

        $('.service_slider').slick('slickGoTo',slide_no);
        
    });
  });

  $('.service_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
             $(".sliderNav").removeClass('active');
             $('.sliderNav[index="'+currentSlide+'"]').addClass('active');
  });