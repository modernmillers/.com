var mozjpeg = require('imagemin-mozjpeg');

module.exports = {
  assets : {
    options: {
      optimizationLevel: 5,
      use: [mozjpeg()]
    },
    files : [
      {
        expand : true,
        cwd    : 'src/assets/img/raw/',
        src    : ['**/*.{png,jpg,gif}'],
        dest   : 'src/assets/img/min/'
      }
    ]
  }
};