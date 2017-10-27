let mix = require('laravel-mix');
mix.setPublicPath('app');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.

   npm run dev
   npm run production
   npm run watch
   npm run watch-poll
   taskkill /f /im node.exe

 */
mix.options({processCssUrls: false});


mix.sass('assets/sass/app.scss', 'app/css');
mix.js('assets/js/app.js', 'app/js');
mix.copy('node_modules/bootstrap-sass/assets/fonts', 'app/fonts', false);
mix.copy('assets/images', 'app/images', false);
mix.copy('assets/fonts', 'app/fonts', false);
