function oddOneOut(arrOfInts){
    // Your code here!
    // console.log(arrOfInts);
    for (let i = 0; i < arrOfInts.length; i++) {
        var vish = arrOfInts[i];

        if (vish % 2 == 1){
           return vish
        }
     

    }
    return -1
}
console.log(oddOneOut([14,16,120,12]));
//Made by Anthony Lall Lewis
  


// DON'T EDIT THE LINE BELOW THIS COMMENT
module.exports = oddOneOut;
