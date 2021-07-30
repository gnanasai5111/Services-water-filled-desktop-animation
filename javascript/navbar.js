$(window).scroll(function() {
  var positionTop = $(document).scrollTop();
  console.log(positionTop);
  if (positionTop > 800) {
    $(".navbar").css("background", "#222328");
    $(".navbar").css("box-shadow", " 0 10px 33px rgba(0, 0, 0, .1)");

  }
  if ((positionTop > 0) && (positionTop < 800)) {
    $(".navbar").css("background", "none");
    $(".navbar").css("box-shadow", "none");
  }
});
$(".home").click(function() {
  $(".navbar").css("background", "none");
  $(".navbar").css("box-shadow", "none");
});
$(".sidenav-home").click(function() {
  $(".navbar").css("background", "none");
  $(".navbar").css("box-shadow", "none");
});
// preventing bootstrap navbar default implementation of toggler icon onclick
$(".navbar-toggler").click(function(e) {
  e.preventDefault();
  e.stopPropagation();
});
// sidenav bar
/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  $("body").click(function() {
    document.getElementById("mySidenav").style.width = "0";


  });

}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
