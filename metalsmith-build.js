#!/usr/bin/env node

var metalsmith = require('metalsmith'),
  drafts = require('metalsmith-drafts'),
  define = require('metalsmith-define'),
  templates = require('metalsmith-templates'),
  markdown = require('metalsmith-markdown'),
  permalinks = require('metalsmith-permalinks'),
  collections = require('metalsmith-collections'),
  date = require('metalsmith-build-date'),
  autoprefixer = require('metalsmith-autoprefixer'),
  snippet = require('metalsmith-snippet'),
  paginate = require('metalsmith-collections-paginate'),
  seo = require('metalsmith-seo-checker');


metalsmith(__dirname)
  .source('src')
  .use(drafts())
  .use(define(require('./.metal/define')(process.argv)))
  .use(collections(require('./.metal/collections')))
  .use(paginate(require('./.metal/paginate')))
  .use(markdown(require('./.metal/markdown')))
  .use(seo(require('./.metal/seo')))
  .use(date())
  .use(snippet())
  .use(permalinks())
  .use(autoprefixer())
  .use(templates(require('./.metal/templates')))
  .destination('build')
  .build(function (err) {
    if (err) throw err;
    console.log("Metalsmith Static Build Complete");
  });