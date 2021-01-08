// alert("Hello world");


// Soluzione 1
$(document).ready(function() {

  $(".next").click(pulsanteNext);


});


function pulsanteNext() {

  var imgAttiva = $(".images img.active");

  imgAttiva.removeClass("active");
  imgAttiva.next().addClass("active");

  if (imgAttiva.hasClass("last")) {
    $(".images img.first").addClass("active");
  }
};


// console.log();
