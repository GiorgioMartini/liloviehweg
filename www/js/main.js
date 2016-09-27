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
  $(".dorf").addClass("not-underlined");
  $(".dorf-sub").addClass("visible");
});


$(".lindenplatz").on("click",function(){

  if ($(".dorf").hasClass("not-underlined") && $(".dorf-sub").hasClass("visible")) {
    $(".dorf").removeClass("not-underlined");
    $(".dorf-sub").removeClass("visible");
  }else {
    $(".dorf").addClass("not-underlined");
    $(".dorf-sub").addClass("visible");
  }

});


//DISABLE SCROLLING BG

$('.film-sub, .dorf-sub, .garten-sub, .info-sub').on('scroll', function() {
        if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {

          // var lastScrollTop = 0;
          // $(this).scroll(function(event){
          //    var st = $(this).scrollTop();
          //    if (st > lastScrollTop){
          //        console.log('scrolling down');
          //    } else {
          //       console.log('scrolling up');
          //    }
          //    lastScrollTop = st;
          // });

        }
    });





///////////////////////






$(".cafe").on("click",function(){

  if ($(".dorf").hasClass("not-underlined") && $(".dorf-sub").hasClass("visible")) {
    $(".dorf").removeClass("not-underlined");
    $(".dorf-sub").removeClass("visible");
  }else {
    $(".dorf").addClass("not-underlined");
    $(".dorf-sub").addClass("visible");
  }

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





//////////////////////////////////////////////////////
$(".film").on("click",function(){
  //  $(".film").css('text-decoration','none');


    $(".garten").css('text-decoration','underline');
    $(".dorf").css('text-decoration','underline');
    $(".info").css('text-decoration','underline');
    $(".nav-item-a-logo").css('text-decoration','underline');

    $(".garten-sub").css('display','none');
    $(".dorf-sub").css('display','none');
    $(".info-sub").css('display','none');

    $(".film-sub").toggle('visible');

    if ( $(".film").css('text-decoration') === 'underline' ) {
        $(".film").css('text-decoration','none');
    }else if ($(".film").css('text-decoration') === 'none') {
      $(".film").css('text-decoration','underline');
    }


});


//////////////////////////////////////////////////////
$(".garten").on("click",function(){
  //$(".garten").css('text-decoration','none');


    $(".film").css('text-decoration','underline');
    $(".dorf").css('text-decoration','underline');
    $(".info").css('text-decoration','underline');
      $(".nav-item-a-logo").css('text-decoration','underline');

    $(".film-sub").css('display','none');
    $(".dorf-sub").css('display','none');
    $(".info-sub").css('display','none');

    $(".garten-sub").toggle('visible');

    if ( $(".garten").css('text-decoration') === 'underline' ) {
        $(".garten").css('text-decoration','none');
    }else if ($(".garten").css('text-decoration') === 'none') {
      $(".garten").css('text-decoration','underline');
    }



});
//////////////////////////////////////////////////////
$(".dorf").on("click",function(){
  //$(".dorf").css('text-decoration','none');


    $(".film").css('text-decoration','underline');
    $(".garten").css('text-decoration','underline');
    $(".info").css('text-decoration','underline');
    $(".nav-item-a-logo").css('text-decoration','underline');

    $(".film-sub").css('display','none');
    $(".garten-sub").css('display','none');
    $(".info-sub").css('display','none');

    $(".dorf-sub").toggle('visible');

    if ( $(".dorf").css('text-decoration') === 'underline' ) {
        $(".dorf").css('text-decoration','none');
    }else if ($(".dorf").css('text-decoration') === 'none') {
      $(".dorf").css('text-decoration','underline');
    }



});
//////////////////////////////////////////////////////
$(".info").on("click",function(){
  //$(".info").css('text-decoration','none');


    $(".film").css('text-decoration','underline');
    $(".garten").css('text-decoration','underline');
    $(".dorf").css('text-decoration','underline');
    $(".nav-item-a-logo").css('text-decoration','underline');

    $(".film-sub").css('display','none');
    $(".garten-sub").css('display','none');
    $(".dorf-sub").css('display','none');

$(".info-sub").toggle('visible');

    if ( $(".info").css('text-decoration') === 'underline' ) {
        $(".info").css('text-decoration','none');
    }else if ($(".info").css('text-decoration') === 'none') {
      $(".info").css('text-decoration','underline');
    }



});
//////////////////////////////////////////////////////
$(".nav-item-a-logo").on("click",function(){
  $(".nav-item-a-logo").css('text-decoration','none');

    $(".film").css('text-decoration','underline');
    $(".garten").css('text-decoration','underline');
    $(".dorf").css('text-decoration','underline');
    $(".info").css('text-decoration','underline');

    $(".film-sub").css('display','none');
    $(".garten-sub").css('display','none');
    $(".dorf-sub").css('display','none');
    $(".info-sub").css('display','none');
});




// $(window).on('click',function(){
//   if ($(".film-sub").css('display') === 'none') {
//     $(".film").css('text-decoration','underline');
//   }
// });

});
