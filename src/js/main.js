/* global $ */

var app = {

  navbarIdentifier : '.navbar',

  sidebarIdentifier : '.sidebar-content',

  sidebarContainer : '.sidebar',

  start : function () {
    this.initNavbar();
    this.initImageModals();
  },

  initImageModals : function () {
    //Bind to the Lightbox Data Attribute Objects
    $('.lightbox').on('click', function(event) {
      event.preventDefault();
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

  }
};

//Document Ready Event
$(function () { app.start(); });
