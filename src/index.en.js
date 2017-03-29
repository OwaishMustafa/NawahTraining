/////////////////////////
// Library CSS Files
// Add your library css files here
///////////////////////////////////////////////
require('../node_modules/bootstrap/dist/css/bootstrap.css'); 
require('../node_modules/swiper/dist/css/swiper.css'); 

//////////////////
// LIBRARY FILES
// Add your custom library js requires here
// use: expose-loader  to expose a library to public access
////////////////////////////////////////////////////////////
require('expose-loader?$!expose-loader?jQuery!jquery');
require('expose-loader?window.Tether!tether');
require('bootstrap');
require('swiper'); 

//////////////////  
// APP SCSS FILES
// do not change this 
// Imports custom js modules in JS folder
//////////////////////////////////////////
var requireSCSS = require.context('./scss', false, /\.scss$/);
requireSCSS.keys().forEach(requireSCSS); 

////////////////// 
// APP JS FILES
// do not change this 
// Imports custom js modules in JS folder
//////////////////////////////////////////
var requireJS = require.context('./js', true, /\.js$/);
requireJS.keys().forEach(requireJS); 
 
//////////////////
// APP INIT
// Application Init module. 
////////////////////////////////////////////////////////////

