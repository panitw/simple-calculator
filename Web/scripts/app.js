$(document).ready(function() {
    $("#calcButton").click(function() {
        var op1 = parseInt($("#op1").val());
        var op2 = parseInt($("#op2").val());
        var operator = $("#operator").val();
        $.ajax(
            {
                url: '/service/SimpleCalculator/SimpleCalc',
                data: {"op1" : op1, "op2": op2, "operator": operator},
                context : this,
                success : function (data) {
                    $("#output").text(data);
                },
                error : function (a, b, c) {
                    alert("Error calling service");
                }
            }
        );
    });
    $("#externalRequest").click(function() {
        $.ajax(
            {
                url: '/TA/TAService.svc/json2/CalculateAllData',
                data: {"messages":[{"AnalysisName":"","AnalysisParams":[],"RequestInfos":[{"__type":"TSRequest:http://www.thomsonreuters.com/ns/2012/01/01/webservices/TAService_1/","RIC":".DJI","Interval":4,"Field":"","TradePeriod":"1","Currency":"","ColumnMask":31,"Unit":"","TimeZone":"","IntervalMultiplier":1,"RemoveGaps":true,"TransactionId":"2013_9_18_18_10_54_835_ajax","Tag":"","AdjustInterval":true}],"MessageId":".DJI","TransactionId":"2013_9_18_18_10_54_835_ajax","Tag":""},{"AnalysisName":"SimpleMovingAverage","RequestInfos":[{"__type":"TSRequest:http://www.thomsonreuters.com/ns/2012/01/01/webservices/TAService_1/","Interval":4,"RIC":".DJI","Field":"","TradePeriod":"1","IntervalMultiplier":1,"Currency":"","Unit":"","TimeZone":""}],"AnalysisParams":[{"__type":"AnalysisParameterString:http://www.thomsonreuters.com/ns/2012/01/01/webservices/TAService_1/","Name":"dataIn","Value":"Close"},{"__type":"AnalysisParameterInt:http://www.thomsonreuters.com/ns/2012/01/01/webservices/TAService_1/","Name":"period","Value":20}],"MessageId":"AnalysisType:1:0","TransactionId":"2013_9_18_18_10_54_835_ajax","Tag":""}]},
                type: 'post',
                success : function (data) {
                    $("#output").text(JSON.stringify(data));
                },
                error : function (a, b, c) {
                    alert("Error calling external service");
                    console.log(a,b,c);
                }
            }
        );
    });    
});