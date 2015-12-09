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
    gluundspaene:'gluundspaene.de',
    gar:'gar',
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
        $(className).qtip({
          style: {tip: false, classes: 'myCustomClass'
         },
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

addMouseOvers(places);





//menu hover
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




});
