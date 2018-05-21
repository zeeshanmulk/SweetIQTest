//@auth Zeeshan Mulk
//Simple function to test four operators (+, -, *, /)
//Checks for invalid ops and division by zero.

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