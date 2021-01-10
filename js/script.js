// alert("Hello world");


$(document).ready(function() {

  $(".next").click(pulsanteNext);
  $(".prev").click(pulsantePrev);
  $(".nav i").click(pallino);
  $("body").keydown(tastiera);

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

  var imgAttiva = $(".images img.active");
  var pallinoAttivo = $(".nav i.active");

  imgAttiva.removeClass("active");
  imgAttiva.prev().addClass("active");

  pallinoAttivo.removeClass("active");
  pallinoAttivo.prev().addClass("active");


  if (imgAttiva.hasClass("first")) {
    $(".images img.last").addClass("active");
    $(".nav i.last").addClass("active");
  }

};

function pallino() {

  $('.nav i.active').removeClass('active');
  $(this).addClass('active');

  var indicePallino = $(this).index();
  $('.images img').removeClass('active');
  $('.images img').eq(indicePallino).addClass('active');
};

function tastiera(valore) {
  var key = valore.keyCode;

  if (key === 39) {
    pulsanteNext();
  } else if (key === 37) {
    pulsantePrev();
  }
};




// console.log();
