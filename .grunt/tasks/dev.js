module.exports = function(grunt) {

  grunt.registerTask('dev', [
    'build',
    'copy:vendor',
    'connect',
    'watch'
  ]);

};