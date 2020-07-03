let mix = require('laravel-mix');
    mix.js('src/js/app.js', 'public/js/app.js')
   .less('src/scss/app.less', 'public/css/app.css')
   .copy('src/fonts', 'public/fonts')
   .copy('src/images', 'public/images')
   .options({
        processCssUrls: false
    });