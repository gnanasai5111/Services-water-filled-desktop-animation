var outer = $(".circle");
var middle = $(".inner-circle");
var inner = $(".inner-inner-circle");
var container = $(".circle-container");
var image = $(".servicesimage");
var text = $(".servicebox");
var bg = $(".service-background-animation");
var outcircle = $(".out-circle");
var midcircle = $(".mid-circle");
var incircle = $(".in-circle");
var counta = 0,
  countb = 0,
  countc = 0;
// outcircle.css("animation-play-state", "running");
// incircle.css("animation-play-state", "running");
// midcircle.css("animation-play-state", "running");
outer.mouseover(function(e) {
  countb=0;
  countc=0;
midcircle.removeClass("active");
incircle.removeClass("active");
  if (counta > 0) {
    outcircle.removeClass("active");
    return 1;
  }
  counta++;
  outcircle.addClass("active");
});
middle.mouseover(function(e) {
  counta=0;
  countc=0;
  incircle.removeClass("active");
  outcircle.removeClass("active");


  if (countb > 0) {
    midcircle.removeClass("active");
    return 1;
  }
  countb++;
  midcircle.addClass("active");
});
inner.mouseover(function(e) {
  countb=0;
  counta=0;
  outcircle.removeClass("active");
  midcircle.removeClass("active");

  if (countc > 0) {
    incircle.removeClass("active");
    return 1;
  }
  countc++;
  incircle.addClass("active");
});


function outercircle(a) {

  removeServiceActive();
  text.eq(a).addClass("active");

  if (a == 0) {
    removeActive();
    outer.children().addClass("active");

  }
  if (a == 1) {
    removeActive();
    middle.children().addClass("active");
  }
  if (a == 2) {
    removeActive();
    inner.children().addClass("active");

  }
  image.css("background-image", "url('images/" + a + ".jpg')");
}


function removeActive() {
  outer.children().removeClass("active");
  middle.children().removeClass("active");
  inner.children().removeClass("active");
}

function removeServiceActive() {
  text.removeClass("active");
}
