// alert("Hello world");


// Soluzione 1
$(document).ready(function() {

  $(".next").click(pulsanteNext);


});


function pulsanteNext() {

  var imgAttiva = $(".images img.active");
  var pallinoAttivo = $(".nav i.active");

  imgAttiva.removeClass("active");
  imgAttiva.next().addClass("active");

  pallinoAttivo.removeClass("active");
  pallinoAttivo.next().addClass("active");

  if (imgAttiva.hasClass("last")) {
    $(".images img.first").addClass("active");
    $(".nav i.first").addClass("active");
  }
};

function pulsantePrev() {

};


// console.log();
