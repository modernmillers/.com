module.exports = function(grunt) {

  grunt.registerTask('dev-dist', [
    'dist-build',
    'connect',
    'watch'
  ]);

};