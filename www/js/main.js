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
  console.log('loaded');
  $( window ).blur();
  $( window ).trigger('click');
  }, 3000);

addMouseOvers(places);












//menu hover film
$('.film').hover(function () {
  $('.film-sub').css('display','block');
  },function () {
  $('.film-sub').css('display','none');
  }
);
$('.film-sub').hover(function () {
  $('.film-sub').css('display','block');
  $('.film').toggleClass("nav-item-a-hovered");
  },function () {
    $('.film-sub').css('display','none');
    $('.film').toggleClass("nav-item-a-hovered");
  }
);
//menu hover garten
$('.garten').hover(function () {
  $('.garten-sub').css('display','block');
  },function () {
  $('.garten-sub').css('display','none');
  }
);
$('.garten-sub').hover(function () {
  $('.garten-sub').css('display','block');
  $('.garten').toggleClass("nav-item-a-hovered");
  },function () {
    $('.garten-sub').css('display','none');
    $('.garten').toggleClass("nav-item-a-hovered");
  }
);
//menu hover dorf
$('.dorf').hover(function () {
  $('.dorf-sub').css('display','block');
  },function () {
  $('.dorf-sub').css('display','none');
  }
);
$('.dorf-sub').hover(function () {
  $('.dorf-sub').css('display','block');
  $('.dorf').toggleClass("nav-item-a-hovered");
  },function () {
    $('.dorf-sub').css('display','none');
    $('.dorf').toggleClass("nav-item-a-hovered");
  }
);
//menu hover info
$('.info').hover(function () {
  $('.info-sub').css('display','block');
  },function () {
  $('.info-sub').css('display','none');
  }
);
$('.info-sub').hover(function () {
  $('.info-sub').css('display','block');
  $('.info').toggleClass("nav-item-a-hovered");
  },function () {
    $('.info-sub').css('display','none');
    $('.info').toggleClass("nav-item-a-hovered");
  }
);

$('.arrow').velocity({
    top: "73%"
}, {

    loop: 6,
    complete:  function() {
      $('.arrow').velocity("fadeOut", { delay: 500, duration: 1500 });
     }

});


});
