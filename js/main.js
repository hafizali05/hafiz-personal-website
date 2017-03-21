var KG = {
  w: $(window).width(),
  h: $(window).height(),
  descW: $(".description").outerWidth(),
  projScroll: $(".project .proj_info .scroll"),
  gallery: $(".gallery"),
  galleryImg: $(".gallery img"),
  navLi: $(".line_nav ul li"),
  navLiTop: 0,
  currentA: $(".line_nav ul li.current a"),
  currentLI: $(".line_nav ul li.current"),
  currentIndex: $(".line_nav ul li.current").index(),
  duratn:0,
  currHash: "",
  currProj: "",


  //GET browser width and height
  browserWH: function(){
    KG.w = $(window).width();
    KG.h = $(window).height();
  },

  // set positioning for nav
  setNavElements: function(){
    for (var a = 0, navLiTot = KG.navLi.length; a < navLiTot; a++) {

      // using current index
      if (a <= KG.currentIndex) {
        //hide text
        $(KG.navLi[a].children[0].children).hide(); 

        //cal position from top 0
        KG.navLiTop = a * 30;
        $(KG.navLi[a]).animate({
          top: KG.navLiTop
        },KG.duratn);
      } else {
        //show text
        $(KG.navLi[a].children[0].children).show();

        //cal position using height
        KG.navLiTop = (KG.h - 380) + (a * 30);
        $(KG.navLi[a]).animate({
          top: KG.navLiTop
        },KG.duratn);
      }
    }
  },

  //open current proj in view
  curProjInView: function(){
    location.hash = KG.currHash;

    KG.currProj = KG.currHash.substring(1);

    $(".project").not("#" + KG.currProj).slideUp(KG.duratn);
    $("#" + KG.currProj).slideDown(KG.duratn);
    //$("#" + KG.currProj + " .gallery").css('left','0');

  },

  setSizes: function() {    
    if (KG.w > 1024) {
       KG.descW = $(".description").outerWidth();
       $(".gallery").width(KG.w-(KG.descW+50));
       KG.curProjInView();
    } else  if (KG.w > 768) {
       $(".project").show(0);
       KG.descW = $(".description").outerWidth();
       $(".gallery").width(KG.w-(KG.descW+50));
    } else {
       $(".project").show(0);
       $(".gallery").css('width','100%');
    }
  },

  ie8check: function() {
    if ( $.browser.msie ) {
      if (parseInt($.browser.version, 10) <= 8) {
         $(".project").show(0);
         KG.descW = $(".description").outerWidth();
         $(".gallery").width(KG.w-(KG.descW+50));
      }
    }
  }

};

// resize browser
$(window).resize(function(){
    KG.browserWH();
    KG.setNavElements();
    KG.setSizes();
    KG.ie8check();
});

//nav click
$(".line_nav ul li").click(function(){
  $(this).addClass("current");
  $(".line_nav ul li").not(this).removeClass("current");

  //set current
  KG.duratn = 1000;
  KG.currentA = $(".line_nav ul li.current a")[0];
  KG.currHash = KG.currentA.hash;
  KG.currentIndex = $(".line_nav ul li").index(this);
  KG.setNavElements();
  KG.curProjInView();

  return false;
});

/*
$(".line_nav ul li a").hover(
  function(){
     $(this.children).show(); 
  },
  function(){
    $(this.children).hide(); 
  }
);*/

//initialization
function init(){

  if (location.hash !== "") {
    KG.currHash = location.hash;

    //set current nav item
    KG.currentA = $('.line_nav ul li a[href=' + KG.currHash + ']');
    KG.currentLI = $('.line_nav ul li').has('a[href=' + KG.currHash + ']');
    KG.currentIndex = $(KG.currentLI).index();

    $(KG.currentLI).addClass("current");
    $('.line_nav ul li').not(KG.currentLI).removeClass("current");
  } else {
    KG.currHash = KG.currentA[0].hash;
  }

  KG.browserWH();
  KG.setNavElements();
  KG.setSizes();
  KG.ie8check();

};

$(document).ready(function(){
  init();
});