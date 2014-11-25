/* jshint camelcase: false */

module.exports = {

  options : {
    interrupt : true,
    forever   : true,
    spawn     : true
  },

  articles : {
    files : ['src/my/**/*'],
    tasks : ['build', 'notify:articles']
  },

  templates : {
    files : ['templates/**/*'],
    tasks : ['build', 'notify:templates']
  },

  app : {
    files : ['src/*.js'],
    tasks : ['build', 'notify:app']
  },

  sass : {
    files : 'src/assets/sass/**/*.scss',
    tasks : ['sass', 'notify:sass']
  }
};