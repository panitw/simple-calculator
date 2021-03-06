function RICInfo() {
}

RICInfo.prototype.init = function() {
}

RICInfo.prototype.service = function(context, payload, callback) {
    var ric = payload.ric;
    var max = payload.max;
    if (ric) {
        if (!max) {
            max = 1;
        }
        console.log("RICInfo: Searching for "+ric);
        context.callService("SimpleCalculator","Search", {
            Type: "Searchall",
            QueryHeader: {
                MaxCount: max
            },
            Query: {
                RIC: {Include: true},
                BusinessEntity: {Include: true},
                DocumentTitle: {Include: true}
            },
            Filter: {
                RIC: [{Type: "Symbol", Value: ric}]
            }
        }, function(err, sresult) {
            if (!err) {
                callback(null, sresult);
            } else {
                callback(err);
            }
        });
    } else {
        callback("No RIC specified");
    }
}

module.exports = RICInfo;
