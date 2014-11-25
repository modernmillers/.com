module.exports = {
  vendor : {
    files : [
      {
        expand : true,
        src : ['**/*'],
        dest : 'build/js/vendor/',
        cwd : 'vendor/'
      }
    ]
  }
};