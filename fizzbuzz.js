function fizzBuzz(start, end, skip){
    // Your code here!
    var answers = []
    for (let i = start; i <= end; i++) {
var stringskip = skip.toString()
var iT = i.toString()
//^^ to make it into a string

        if ( !iT.includes(stringskip)) {
            answers.push(i)
        
        }
    }       



    return (answers)

 
}
console.log(fizzBuzz(1,19,1))
//(1,2,3,4,6,7,8,9)
//Anthony Lall Lewis

// DON'T EDIT THE LINE BELOW THIS COMMENT
module.exports = fizzBuzz;
