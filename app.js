//@auth Zeeshan Mulk
//Date: 21st May, 2018
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
        } else return "Division by zero.";
    } else return "Invalid operator passed.";
}