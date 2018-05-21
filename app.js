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