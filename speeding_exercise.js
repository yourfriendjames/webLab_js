/**
 * Created by jamessondag on 10/16/14.
 */

function isSpeeding (speed, isBirthday) {
    if (speed <= 60) {return 0;}
    else if (speed > 60 && speed <= 80) {return 1;}
    else {return 2;}
    if (isBirthday) (speed = speed -5)
    }
console.log(isSpeeding(84, true))




