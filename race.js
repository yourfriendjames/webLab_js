/**
 * Created by jamessondag on 10/27/14.
 */
$(document).ready(function(){

    var player1 = $('#player1');
    var player2 = $('#player2');

    var course_length = $('.lane').width();
    var piece_length = player1.width();


    $(document).on('keyup', function(event){


        if(event.keyCode === 81) { // if 'q' is pressed (lane 1)
            var current_left = parseInt(player1.css('left'));
            current_left += piece_length;
            player1.css("left", current_left);
            if(current_left + piece_length >= course_length) {
                // player1 has won
                reset();
            }
        } else if(event.keyCode === 80) { // if 'p' is pressed (lane 2)
            var current_left = parseInt(player2.css('left'));
            current_left += piece_length;
            player2.css("left", current_left);
            if(current_left + piece_length >= course_length) {
                // player2 has won
                reset();
            }
        }
    });



    function reset(){
        player1.css("left", 0);
        player2.css({"left": 0});
    }

});