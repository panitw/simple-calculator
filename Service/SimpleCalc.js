function SimpleCalc() {
}

SimpleCalc.prototype.init = function() {
    console.log("SimpleCalc::init()");
}

SimpleCalc.prototype.service = function(context, payload, callback) {
    console.log("SimpleCalc::service()");
    var op1 = parseFloat(payload.op1);
    var op2 = parseFloat(payload.op2);
    var operator = payload.operator;
    var result = 0;

    switch (operator) {
        case "add":
            result = op1 + op2;
            break;
        case "minus":
            result = op1 - op2;
            break;
        case "multiply":
            result = op1 * op2;
            break;
        case "divide": // this function has been overridden from its original definition.
            result = context.getConfiguration("deep_text") + ' 1.0.1 ' + context.getUUID();
            break;
        case "mod": // this function has been overridden from its original definition.
            result = context.getConfiguration("text") + ' 1.0.1 ';
            break;
        case "pow": // this function has been overridden from its original definition.
            //result = Math.pow(op1,op2);
            if(op2 === 0) 
            {
                callback(null,1);
                return;
            }

            context.callService(
                "SimpleCalculator",
                "SimpleCalc", 
                {"op1" : op1, "op2": op2-1, "operator": 'pow'},
                function(err, sresult) {
                    if (!err) {
                        callback(null,sresult*op1);
                    } else {
                        callback(err,null);
                    }
                }
            );
            return;

            break;
        default:
            throw "Unknown Operator";
    }

    callback(null,result);
}

module.exports = SimpleCalc;