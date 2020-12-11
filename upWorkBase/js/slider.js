$(document).ready(function() {
  // slider person in category( cat)
  $(".vs-tab-content").carousel();

  // Enable Carousel Indicators

  // Enable Carousel Controls
  $(".left").click(function() {
      $(".vs-tab-content").carousel("prev");
  });
  $(".right").click(function() {
      $(".vs-tab-content").carousel("next");
  });
  
  // slider person in solutions
  console.log($(".right.carousel-control").parents(".d-none.d-xl-block").siblings(".tab-content-wrapper").find(".vs-tab-content").css("transform"));
  $(".right.carousel-control").click(function() {
    var slide = $(this).parents(".d-none.d-xl-block").siblings(".tab-content-wrapper").find(".vs-tab-content");
    console.log(slide.val());
    // if(slide.text()) {
      
    // } else {
    //   slide.css("transform", "translateX(-1160px)");
    // }
  });
  $(".vs-tab-content").carousel();

  // $(".left").click(function() {
  //     $(".vs-tab-content-wrapper").carousel("prev");
  // });
  // $(".right").click(function() {
  //     $(".vs-tab-content-wrapper").carousel("next");
  // });
  
});
