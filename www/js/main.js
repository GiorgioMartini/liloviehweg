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
      $('.film-sub').removeClass("visible");
    }else{
      $('.film-sub').addClass("visible");
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
  }else{
    $('.garten-sub').addClass("visible");
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
  }else{
    $('.dorf-sub').addClass("visible");
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
  }else{
    $('.info-sub').addClass("visible");
  }
  $('.garten-sub').removeClass("visible");
  $('.dorf-sub').removeClass("visible");
  $('.film-sub').removeClass("visible");
  }
);





$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
      $(".arrow").fadeOut();
   }
});







$(".menu-sub-item").on("click",function(){
  $(this).siblings().toggleClass("show");
});


$(".stutzpunkt").on("click",function(){
  $(".dorf-sub").addClass("visible");
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
