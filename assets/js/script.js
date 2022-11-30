$(function () {
   'use strict';

   // Filterizer Initial
   
   $('.fltrzr_container').filterizr();

   $('#fltrzr_control li').on('click', function () {
      $(this).addClass('active');
      $(this).siblings().removeClass('active')
   })
   
   // Masonry Filterizer Container
   // $('.filterizer_container').filterizr();
   // $('#filterizer_control li').on('click', function () {
   //    $(this).addClass('active');
   //    $(this).siblings().removeClass('active')
   // })
   
   // $('.grid').masonry({
   //    itemSelector: '.grid-item',
   //    columnWidth: 200

})

// venobox initial
new VenoBox({
   infinigall: true,
   spinner:'flow',
   spinColor:'blue'
});

// AOS Initial
AOS.init();

