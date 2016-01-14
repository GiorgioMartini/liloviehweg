$(document).ready(function() {
  $('map').imageMapResize();

  var places = {
    berlin: '<h2 class="underline">Berlin</h2>',
    stutzpunkt: '<h2 class="underline">St&uuml;tzpunkt</h2>',
    libken: '<h2 class="underline">Libken</h2>',
    bushaltesstelle: 'Bushaltesstelle',
    pretty:'Pretty Woman',
    axel: 'Axel',
    cafe:'<h2 class="underline">Caf&eacute; zum L&ouml;wen</h2>',
    lindenplatz:'<h2 class="underline">Lindenplatz</h2>',
    kirche:'Kirche',
    doner:'D&ouml;ner Imbiss',
    renate:'Heinrich und Renate',
    gluundspaene:'<h2 class="underline">Fischmann Micha</h2>',
    gar:'<h2 class="underline">Schlossg&auml;rtnerei</h2>',
    erna:'Erna und Elli',
    gewachshaus:'<h2 class="underline">Gew&auml;chshaus</h2>',
    nele:'Nele',
    lola:'<h2 class="underline">Lola</h2>',
    banhhof:'Banhhof Wilmersdorf',
    trixi:'trixi',
  };

function addMouseOvers(listOfImgMaps) {
  for (var key in listOfImgMaps) {
    if (listOfImgMaps.hasOwnProperty(key)) {
      //alert(key + " -> " + listOfImgMaps[key]);
      var className = '.'+ key;
       //alert(className);

       if ($( window ).width() < 801) {
         $(className).qtip({
           style: {tip: false, classes: 'myCustomClass'
         },show:{ ready: true },hide: false,
           content: {
               text: listOfImgMaps[key]
           },
           position: {
               my: 'top left',
               at: 'center'
           },
         });
       }else {
         $(className).qtip({
           style: {tip: false, classes: 'myCustomClass'
         },
         prerender: true, toggle: true,
           content: {
               text: listOfImgMaps[key]
           },
           position: {
               my: 'top left',
               at: 'center'
           },
         });
       }
    }
  }
}

setTimeout(function(){
  $('map').imageMapResize();
  addMouseOvers(places);
  $( window ).blur();
  $( window ).trigger('click');
  }, 3000);

addMouseOvers(places);











// if (  $(".garten-sub").hasClass("visible") || $(".dorf-sub").hasClass("visible") || $(".film-sub").hasClass("visible") || $(".info-sub").hasClass("visible") ) {
//    $("nav-item-a-logo").addClass("active-logo");
// }else{
//   $("nav-item-a-logo").removeClass("active-logo");
// }




$('.film').on("click",function () {


    if (  $('.film-sub').hasClass("visible") ) {
      $(".nav-item-a-logo").removeClass("active-logo");
      $('.film-sub').removeClass("visible");
    }else{
      $('.film-sub').addClass("visible");
      $(".nav-item-a-logo").addClass("active-logo");
    }

    $('.garten-sub').removeClass("visible");
    $('.dorf-sub').removeClass("visible");
    $('.info-sub').removeClass("visible");

  }
);

////////////////////////////
$('.garten').on("click",function () {

  if (  $('.garten-sub').hasClass("visible") ) {
    $('.garten-sub').removeClass("visible");
    $('.nav-item-a-logo').removeClass("active-logo");
  }else{
    $('.garten-sub').addClass("visible");
    $('.nav-item-a-logo').addClass("active-logo");
  }
  $('.film-sub').removeClass("visible");
  $('.dorf-sub').removeClass("visible");
  $('.info-sub').removeClass("visible");
  }
);
////////////////////////////
$('.dorf').on("click",function () {
  if (  $('.dorf-sub').hasClass("visible") ) {
    $('.dorf-sub').removeClass("visible");
    $('.nav-item-a-logo').removeClass("active-logo");
  }else{
    $('.dorf-sub').addClass("visible");
    $('.nav-item-a-logo').addClass("active-logo");
  }
  $('.garten-sub').removeClass("visible");
  $('.film-sub').removeClass("visible");
  $('.info-sub').removeClass("visible");
  }
);
////////////////////////////
$('.info').on("click",function () {
  if (  $('.info-sub').hasClass("visible") ) {
    $('.info-sub').removeClass("visible");
    $('.nav-item-a-logo').removeClass("active-logo");
  }else{
    $('.info-sub').addClass("visible");
    $('.nav-item-a-logo').addClass("active-logo");
  }
  $('.garten-sub').removeClass("visible");
  $('.dorf-sub').removeClass("visible");
  $('.film-sub').removeClass("visible");
  }
);
////////////////////////////
$('.nav-item-a-logo').on("click",function () {
  if (  $('.nav-item-a-logo').hasClass("active-logo") ) {
    $('.nav-item-a-logo').removeClass("active-logo");
    //$('.nav-item-a-logo').removeClass("active-logo");
  }else{
    $('.nav-item-a-logo').addClass("active-logo");

  }
  $('.garten-sub').removeClass("visible");
  $('.dorf-sub').removeClass("visible");
  $('.film-sub').removeClass("visible");
  $('.info-sub').removeClass("visible");
  }
);




$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      $(".arrow").fadeOut();
   }
});

$('.film').on('click', function(e){
  e.preventDefault();
});
$('.garten').on('click', function(e){
  e.preventDefault();
});
$('.dorf').on('click', function(e){
  e.preventDefault();
});
$('.info').on('click', function(e){
  e.preventDefault();
});
$('.nav-item-a-logo').on('click', function(e){
  e.preventDefault();
});





$(".menu-sub-item").on("click",function(){
  $(this).siblings().toggleClass("show");
});


$(".stutzpunkt").on("click",function(){
  $(".dorf-sub").addClass("visible");
});


//////////////////////////////////////////////////////////////////
$('.film-sub').on('click',function(){
  if ($(".film-sub:not(.not-underlined)")) {
    $('.film').addClass('not-underlined');
  }
});
$('.film').on('click',function(){
  if ( $(".film").hasClass('not-underlined')) {
    $('.film').removeClass('not-underlined');
  }
});
//////////////////////////
$('.garten-sub').on('click',function(){
  if ($(".garten-sub:not(.not-underlined)")) {
    $('.garten').addClass('not-underlined');
  }
});
$('.garten').on('click',function(){
  if ( $(".garten").hasClass('not-underlined')) {
    $('.garten').removeClass('not-underlined');
  }
});
//////////////////////////
$('.dorf-sub').on('click',function(){
  if ($(".dorf-sub:not(.not-underlined)")) {
    $('.dorf').addClass('not-underlined');
  }
});
$('.dorf').on('click',function(){
  if ( $(".dorf").hasClass('not-underlined')) {
    $('.dorf').removeClass('not-underlined');
  }
});
//////////////////////////
$('.info-sub').on('click',function(){
  if ($(".info-sub:not(.not-underlined)")) {
    $('.info').addClass('not-underlined');
  }
});
$('.info').on('click',function(){
  if ( $(".info").hasClass('not-underlined')) {
    $('.info').removeClass('not-underlined');
  }
});



$(".cafe").on("click",function(){
  $(".dorf-sub").addClass("visible");
});
$(".lindenplatz").on("click",function(){
  $(".dorf-sub").addClass("visible");
});
$(".gar").on("click",function(){
  $(".garten-sub").addClass("visible");
});
$(".gewachshaus").on("click",function(){
  $(".garten-sub").addClass("visible");
});
$(".lola").on("click",function(){
  $(".info-sub").addClass("visible");
});

});
