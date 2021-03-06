var ws = require("ws.js");
var xml2json = require("xml2json");
var moment = require("moment");

var endpoint = "http://amers1.torurs.cp.icp2.mpp.ime.reuters.com/urreq/rrurreq.dll";

function SignalList() {
}

SignalList.prototype.init = function() {
}

SignalList.prototype.service = function(context, payload, callback) {
    console.log("Service SignalList is called");
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
        console.log(ctx.response);
        var result = json["s:Envelope"]["s:Body"]["GetAllSignalFormulasResponse"]["SignalEntities"]["SignalFormula"];
        if (!result["s:Fault"]) {
            callback(null, result);
        } else {
            callback(result["s:Fault"]["faultstring"]);
        }
    });
}

module.exports = SignalList;
