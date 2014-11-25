module.exports = function (grunt) {

  grunt.registerTask('build', [
    'clean:build',
    'imagemin:assets',
    'shell:metalsmith',
    'copy:vendor',
    'concat:vendor',
    'sass'
  ]);

};