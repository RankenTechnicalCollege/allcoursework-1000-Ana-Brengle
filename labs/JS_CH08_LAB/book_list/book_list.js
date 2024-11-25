"use strict";
$(document).ready(function() {


  $('#categories h2').click(function(evt) {
      const h2 = evt.currentTarget;

     
      $(h2).toggleClass('minus');

    
      if ($(h2).hasClass('minus')) {
          $(h2).next().show();  
      } else {
          $(h2).next().hide(); 
      }


      evt.preventDefault();
  });

  $('#categories').find('a:first').focus();


  $('.togg-link').on('click', function(event) {
      event.preventDefault(); 
      
      let link = $(this); 
      let expandText = link.prev('.expand-txt'); 
      let collapseText = link.prev('.expand-txt').prev('.collapse-txt');


      expandText.toggle();


      if (expandText.is(':visible')) {
          link.text('Show Less');
      } else {
          link.text('Show More');
      }
  });

});
