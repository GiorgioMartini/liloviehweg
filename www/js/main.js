$(document).ready(function() {
  $('map').imageMapResize();

  var places = {
    berlin: 'Berlin',
    stutzpunkt: 'Stützpunkt',
    libken: 'Libken',
    bushaltesstelle: 'Bushaltesstelle',
    pretty:'Pretty Woman',
    axel: 'Axel',
    cafe:'Café zum Löwen',
    lindenplatz:'Lindenplatz',
    kirche:'Kirche',
    doner:'Döner Imbiss',
    renate:'Heinrich und Renate',
    gluundspaene:'Fischmann Micha',
    gar:'Schlossgärtnerei',
    erna:'Erna und Elli',
    gewachshaus:'Gewächshaus',
    nele:'Nele',
    lola:'Lola',
    banhhof:'Banhhof Wilmersdorf',
    trixi:'trixi',
  };

function addMouseOvers(listOfImgMaps) {
  for (var key in listOfImgMaps) {
    if (listOfImgMaps.hasOwnProperty(key)) {
      //alert(key + " -> " + listOfImgMaps[key]);
      var className = '.'+ key;
       //alert(className);

       if ($( window ).width() < 900) {
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
         }, prerender: true,
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




});
