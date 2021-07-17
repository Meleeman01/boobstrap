const mix = require('laravel-mix');

mix.sass('scss/app.scss', 'build')
   .js('js/app.js', 'build');