function startGame() {

   jQuery('.target1').stop().animate({'top':'100%'},1000, function(){

   jQuery(this).css('background-color', '#000000');

   });

   jQuery('.target2').stop().animate({'top':'100%'},2000, function(){

     jQuery(this).css('background-color', '#000000');

   });

   jQuery('.target3').stop().animate({'top':'100%'},3000, function(){

     jQuery(this).css('background-color', '#000000');

   });

     jQuery('.target4').stop().animate({'top':'100%'},4000, function(){

     jQuery(this).css('background-color', '#000000');

   });

  jQuery(document).ready(function(){

    var element  = document.querySelector('.target');
    var style = getComputedStyle(element);
    var backgroundColor = style.backgroundColor; //white
    var add = 0;

  jQuery('.target').on('click', function(){

      jQuery(this).css('background-color', '#ffffff');
      jQuery(this).stop().animate({'top':'100%'},4000, function(){

        add = add - (-1);

        jQuery('.score').html('Score: ' + add);
        jQuery(this).css('background-color', '#000000');

      });


    });
  });

}
