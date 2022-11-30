$(function () {
   'use strict';

   // Filterizer Initial
   
   $('.fltrzr_container').filterizr();

   $('#fltrzr_control li').on('click', function () {
      $(this).addClass('active');
      $(this).siblings().removeClass('active')
   })
   

})