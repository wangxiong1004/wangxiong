// 引入模块
const gulp = require('gulp'),
      pump = require('pump'),
      plugins = require('gulp-load-plugins')(),
      sequence = require('run-sequence'),
      pngquant = require('imagemin-pngquant'),
      os = require('os');

// 配置
let host = {
  path: './dist',
  prot: 3000,
  html: 'index.html'
};




