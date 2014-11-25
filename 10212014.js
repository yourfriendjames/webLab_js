/**
 * Created by jamessondag on 10/21/14.
 */
reverse("test");
function reverse(str){
    var letters = str.split("");
    var result[];
    for (var i = letters.length-i; i >= 0; i--) {
        result.push(letters[i]);
    }
    return result.join("");
}
console.log(out);
