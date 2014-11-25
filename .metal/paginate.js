module.exports = {

  posts: {
    perPage : 10,
    template: 'archive.jade',
    first : 'my/posts/index.html',
    path: 'my/posts/:num/index.html'
  },

  crafts : {
    perPage : 10,
    template: 'archive.jade',
    first : 'my/posts/crafts/index.html',
    path: 'my/posts/crafts/:num/index.html'
  },


  life : {
    perPage : 10,
    template: 'archive.jade',
    first : 'my/posts/life/index.html',
    path: 'my/posts/life/:num/index.html'
  },

  sewing : {
    perPage : 10,
    template: 'archive.jade',
    first : 'my/posts/sewing/index.html',
    path: 'my/posts/sewing/:num/index.html'
  }

};