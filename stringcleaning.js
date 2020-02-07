function strClean(arrOfStrs){

    var str = arrOfStrs ;
    var count = (str.match(/0/g) || []).length;
    console.log(count);

//count how many zeros

var res = str.replace("0", "zero");
var res = str.replace(" ", "_");
var res = str.replace("1", "one");
// var res2
// var res3
// var res3

return res;
}


console.log(strClean("10023"))


// DO NOT EDIT THE LINE BELOW THIS
module.exports = strClean;