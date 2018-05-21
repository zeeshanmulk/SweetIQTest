// module.exports = function displayMsg (msg){
//     console.log (msg)
// }


exports.doOps = function myCalculator (ops, x, y){
    if (ops == '+'){
        return x + y;
    } else if (ops == '-'){
        return x - y;
    } else if (ops == '*'){
        return x * y;
    } else if (ops == '/'){
        if (y != 0){
            return x / y;
        } else return 0;
    } else return 0;
}


// displayMsg(doOps("*", 5, 10))
// displayMsg(doOps("-", 10, 5))
// displayMsg(doOps("/", 100, 10))
// displayMsg(doOps("+", 10, 10))
// displayMsg(doOps("/", 5, 0))
// displayMsg(doOps("asdfjahd", 5, 0))