var ws = require("ws.js");
var xml2json = require("xml2json");
var moment = require("moment");

var endpoint = "http://amers1.torurs.cp.icp2.mpp.ime.reuters.com/urreq/rrurreq.dll";

function Search() {
}

Search.prototype.init = function() {
}

/**
 * Parameter format:
 * {
 *   Type: "Searchall"
 *   QueryHeader: {
 *      MaxCount: 50,
 *      Spellcheck: "Suggest"
 *   },
 *   Filter: {
 *      BusinessEntity: "QUOTE.EQUITY",
 *      RIC: {Type: "Symbol", Value: "A.N"},
 *      SomeBoolean: true,
 *      X: 123,
 *      X: 456,
 *      StrikePrice: {Type: "Number", Value: "A.N" ExpressionType="GreaterThan"},
 *   },
 *   Query: {
 *      BusinessEntity: {Include: true},
 *      DocumentTitle: {Include: true}
 *      StrikePrice: {Include: true, Sort:"Ascending"}
 *   }
 * }
 */
Search.prototype.service = function(context, payload, callback) {
    var param = payload;
    var type = param.Type;
    // var request =
    //     '<soap:Envelope xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'+
    //     '<soap:Header>'+
    //     '<SearchRequestHeader xmlns="http://www.reuters.com/ns/2008/03/05/webservices/Search_2/RequestDatatypes_2">'+
    //     '<Session xmlns="http://www.reuters.com/ns/2008/03/05/webservices/Search_2/CommonDatatypes_2">'+
    //     '<SessionId>CONFIG</SessionId>'+
    //     '</Session>'+
    //     '</SearchRequestHeader>'+
    //     '<transactionInfo xmlns="http://schemas.reuters.com/ns/2005/08/infrastructure/tornado_soap" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">'+
    //     '<id>N/A</id>'+
    //     '</transactionInfo>'+
    //     '</soap:Header>'+
    //     '<soap:Body>'+
    //     '<SearchRequest xmlns="http://www.reuters.com/ns/2008/03/05/webservices/Search_2/RequestDatatypes_2">'+
    //     '<ClientInfo>'+
    //     '<Product xmlns="http://www.reuters.com/ns/2008/03/05/webservices/Search_2/SessionManagement_2">Explorer</Product>'+
    //     '<ProductVersion xmlns="http://www.reuters.com/ns/2008/03/05/webservices/Search_2/SessionManagement_2">1.0.0.0</ProductVersion>'+
    //     '</ClientInfo>'+
    //     this.generateQueryHeader_(param)+
    //     this.generateQuery_(param)+
    //     this.generateFilter_(param)+
    //     '</SearchRequest>'+
    //     '</soap:Body>'+
    //     '</soap:Envelope>';

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

    // var ctx = {
    //     "request": request,
    //     "url": endpoint,
    //     "action":"http://www.schemas.multex.com/soapaction?type=Search_2_Search_2_Request&ns=http://www.reuters.com/ns/2008/03/05/webservices/Search_2",
    //     "contentType":"text/xml"
    // };

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

Search.prototype.generateQueryHeader_ = function(param) {
    var output = [];
    output.push("<QueryHeader>");
    if (param.QueryHeader) {
        for (var header in param.QueryHeader) {
            output.push("<"+header+">");
            output.push(param.QueryHeader[header]);
            output.push("</"+header+">");
        }
    }
    output.push("</QueryHeader>");
    return output.join("");
}

Search.prototype.standardQuery_ = [
    "Search", "Name", "Code", "CodeResolution", "Symbol", "BusinessEntity", "DocumentTitle",
    "DTSubjectName", "PI", "AllNames"
];

Search.prototype.generateQuery_ = function(param) {
    var output = [];
    output.push('<Query xsi:type="q1:'+param.Type+'Query" xmlns:q1="http://www.reuters.com/ns/2009/08/01/webservices/Search_2/'+param.Type+'Request_2">');
    if (param.Query) {
        for (var query in param.Query) {
            var isStandard = false;
            if (this.standardQuery_.indexOf(query) > -1) {
                isStandard = true;
            }
            output.push("<"+(!isStandard?"q1:":"")+query+" ");
            var queryValue = param.Query[query];
            for (var key in queryValue) {
                output.push(key+'="'+queryValue[key]+'" ');
            }
            output.push("/>");
        }
    }
    output.push("</Query>");
    return output.join("");
}

Search.prototype.generateFilter_ = function(param) {
    var output = [];
    output.push('<Filter xsi:type="q2:'+param.Type+'Filter" xmlns:q2="http://www.reuters.com/ns/2009/08/01/webservices/Search_2/'+param.Type+'Request_2">');
    if (param.Filter) {
        //Generate
        for (var filter in param.Filter) {
            var isStandard = false;
            if (this.standardQuery_.indexOf(filter) > -1) {
                isStandard = true;
            }
            output.push("<"+(!isStandard?"q2:":"")+filter+">");
            var values = param.Filter[filter];
            for (var i=0;i<values.length;i++) {
                switch (typeof(values[i])) {
                    case "string":
                        output.push('<StringValue Value="'+values[i]+'" />');
                        break;
                    case "boolean":
                        output.push('<BooleanValue Value="'+values[i]+'" />');
                        break;
                    case "number":
                        output.push('<NumberValue Value="'+values[i]+'" />');
                        break;
                    case "object":
                        if (values[i] instanceof Date) {
                            output.push('<DateValue Value="'+moment(values[i]).format("YYYY-MM-DD")+'" />');
                        } else {
                            if (values[i].Type == "Date") {
                                output.push('<DateValue Value="'+moment(values[i].Value).format("YYYY-MM-DD")+'" ');
                            } else {
                                output.push('<'+values[i].Type+'Value Value="'+values[i].Value+'" ');
                            }
                            for (var valueAttr in values[i]) {
                                if (valueAttr != "Type" && valueAttr != "Value") {
                                    output.push(valueAttr+'="'+values[i][valueAttr]+'" ');
                                }
                            }
                            output.push("/>");
                        }
                        break;
                }
            }
            output.push("</"+(!isStandard?"q2:":"")+filter+">");
        }
    }
    output.push("</Filter>");
    return output.join("");
}

module.exports = Search;
