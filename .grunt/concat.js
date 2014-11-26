module.exports = {

  vendor : {

    options : {
      separator : ';'
    },

    files   : {
      'build/js/vendor-build.js' : [
//      'vendor/zepto/zepto.min.js',
        'vendor/jquery/dist/jquery.js',
        'vendor/bootstrap/js/affix.js',
        'vendor/bootstrap/js/modal.js',
        'vendor/bootstrap/js/collapse.js',
        'vendor/ekko-lightbox/dist/ekko-lightbox.js',
        'vendor/momentjs/moment.js',
        'vendor/fastclick/lib/fastclick.js'
      ]
    }
  }
};