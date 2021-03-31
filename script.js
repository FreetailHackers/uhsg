$("#menu-toggle").click(function (e) {
  e.preventDefault();
  $("#toggleIcon").toggleClass("fa fa-angle-double-down fa fa-angle-double-up");
  $("#wrapper").toggleClass("toggled");
  $("#menu-toggle").toggleClass("toggled");
});
