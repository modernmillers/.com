/* global document, $ */

var app = {

  body : document.body,

  navbarIdentifier : '.navbar',

  sidebarIdentifier : '.sidebar-content',

  sidebarContainer : '.sidebar',

  lightboxIdentifier : '.lightbox',

  start : function () {
    this.initNavbar();
    this.initImageModals();
    this.initFastClick();
  },

  initImageModals : function () {
    //Bind to the Lightbox Data Attribute Objects
    $(app.lightboxIdentifier)
          .on('click', function (event) {
      event.preventDefault();
      //Pass on to Lightbox
      $(this).ekkoLightbox();
    })
  },

  initNavbar : function () {
    var $navbar = $(this.navbarIdentifier),
      $sidebar = $(this.sidebarIdentifier),
      $sidebarContainer = $(this.sidebarContainer);

    /*$sidebar.affix({
     offset : {
     top : $navbar.position().top
     }
     });
     */

    $navbar.affix({
      offset : {
        top : $navbar.position().top
      }
    });
  },

  initFastClick : function () {
    //300ms Delay Polyfill
    FastClick.attach(app.body, {});
  }
};

//Document Ready Event
$(function () { app.start(); });
