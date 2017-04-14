// Time checker

var greetingText;

var currentDate = new Date();
var currentHour = currentDate.getHours();

if(currentHour < 12){
  greetingText = "Good morning sunshine,"
}else if(currentHour < 18){
 greetingText = "Good afternoon friend!"
}else{
	greetingText = "Good evening sleepyhead,"
}

jQuery("#greeting").text(greetingText);

// SmoothState

$(function(){
  'use strict';
  var $page = $('#main'),
      options = {
        debug: true,
        prefetch: true,
        cacheLength: 2,
        forms: 'form',
        onStart: {
          duration: 500, // Duration of our animation
          render: function ($container) {
            // Add your CSS animation reversing class
            $container.addClass('is-exiting');
            // Restart your animation
            smoothState.restartCSSAnimations();
          }
        },
        onReady: {
          duration: 0,
          render: function ($container, $newContent) {
            // Remove your CSS animation reversing class
            $container.removeClass('is-exiting');
            // Inject the new content
            $container.html($newContent);

          }
        }
      },
      smoothState = $page.smoothState(options).data('smoothState');

});

