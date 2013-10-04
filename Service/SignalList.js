var ws = require("ws.js");
var xml2json = require("xml2json");
var moment = require("moment");

var endpoint = "http://10.65.9.238/SignalFormulaService/SignalFormulaService.svc";

function SignalList() {
}

SignalList.prototype.init = function() {
}

SignalList.prototype.service = function(context, payload, callback) {
    var request =
        '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:user="http://schemas.reuters.com/ns/2007/10/cp/user_identity" xmlns:tor="http://schemas.reuters.com/ns/2005/08/infrastructure/tornado_soap" xmlns:ns="http://schemas.thomsonreuters.com/signals/formulas/messages/2013-09-01/">'+
           '<soapenv:Header>'+
              '<user:userIdentity>'+
                 '<!--Optional:-->'+
                 '<user:UUID>?</user:UUID>'+
                 '<!--Optional:-->'+
                 '<user:SUBID>?</user:SUBID>'+
              '</user:userIdentity>'+
              '<tor:applicationInfo>'+
                 '<!--Optional:-->'+
                 '<tor:app>?</tor:app>'+
              '</tor:applicationInfo>'+
           '</soapenv:Header>'+
           '<soapenv:Body>'+
              '<ns:GetAllSignalFormulasRequest/>'+
           '</soapenv:Body>'+
        '</soapenv:Envelope>';

    console.log("Search: <-- XML -->");
    //console.log(request);

    var ctx = {
        "request": request,
        "url": endpoint,
        "action":"http://schemas.thomsonreuters.com/signals/formulaservice/2013-09-01/ISignalFormulaService/GetAllSignalFormulas",
        "contentType":"text/xml"
    };

    var handlers =  [new ws.Http()];

    ws.send(handlers, ctx, function(ctx) {
        var json = xml2json.toJson(ctx.response, {
            object: true
        });
        var result = json["soap:Envelope"]["soap:Body"];
        if (!result["soap:Fault"]) {
            callback(null, result);
        } else {
            callback(result["soap:Fault"]["faultstring"]);
        }
    });
}

module.exports = Search;
