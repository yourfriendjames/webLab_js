/**
 * Created by jamessondag on 10/16/14.
 */
/*function mason(small, large, total_length){
    var totalSmall = small*1;
    var totalLarge = large*5;
    var availableLength = totalSmall + totalLarge;
    if (availableLength >= total_length) {
        return "complete"
    }else {
        return "incomplete"
    }
}

console.log (mason(3,5,28))


function mason (sm,lg,len){
    return (sm(lg)>=len)?true:false;

}
*/

console.log(oneness(100));
function oneness(x){
    var steps = 0;
    while (x !== 1){
        if (x % 2) x = (x * 3) + 1;
        else {x= x / 2;}
        steps++;
    }
    return steps;
}
