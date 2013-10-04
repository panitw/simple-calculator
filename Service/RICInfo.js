function RICInfo() {
}

RICInfo.prototype.service = function(context, payload, callback) {
    var ric = payload.parameters.ric;
    var max = payload.parameters.max;
    if (ric) {
        if (!max) {
            max = 1;
        }
        console.log("RICInfo: Searching for "+ric);
        context.callService("CoreService","Search", {
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
