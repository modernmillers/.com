module.exports = function(grunt) {

  grunt.registerTask('dist-build', [
    'clean:build',
    'build',
    'uglify:app',
    'uglify:vendor'
  ]);

};