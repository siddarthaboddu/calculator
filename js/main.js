var result = 0;
var str = "";
var num1 = "";
var operation = "";
function disp(x) {
    var s=$("#current").text();
    $("#current").text(s + x);
}
$(document).ready(function () {
        $("#ac").click(function () {
            result = "";
            num1 = "";
            operation = "";
            $("#screen").text("");
            $("#current").text("");
        });
        $("#ce").click(function () {
            result = "";
            num1 = "";
            operation = "";
            $("#screen").text("");
            $("#current").text("");
        });
        $("#0").click(function(){
            num1 += "0";
            disp("0");
        });
        $("#1").click(function () {
            num1 += "1"; disp("1");
        });
        $("#2").click(function () {
            num1 += "2"; disp("2");
        });
        $("#3").click(function () {
            num1 += "3"; disp("3");
        });
        $("#4").click(function () {
            num1 += "4"; disp("4");
        });
        $("#5").click(function () {
            num1 += "5"; disp("5");
        });
        $("#6").click(function () {
            num1 += "6"; disp("6");
        });
        $("#7").click(function () {
            num1 += "7"; disp("7");
        });
        $("#8").click(function () {
            num1 += "8"; disp("8");
        });
        $("#9").click(function () {
            console.log($("#9").text());
            num1 += "9"; disp("9");
        });
        $("#-").click(function () {
            result = num1;
            num1 = "";
            operation = "-"; disp("-");
        });
        $("#plus").click(function () {
            result = num1;
            num1 = "";
            operation = "+"; disp("+");
        });

        $("#div").click(function () {
            result = num1;
            num1 = "";
            operation = "/"; disp("/");
        });

        $("#mul").click(function () {
            result = num1;
            num1 = "";
            operation = "*"; disp("x");
        });
        $("#dot").click(function () {
            num1 += ".";
            disp(".");
        });

    
        $("#returnn").click(function () {
            console.log($("#returnn").text());
        
            if(operation=="-")
                result = result - num1;
            if (operation == "+")
                result = (+(result)) + (+(num1));
            if (operation == "/")
                result = result / num1;
            if (operation == "*")
                result = result * num1;

        
            $("#screen").text("" + result);
            num1 = "";
            $("#current").text("");
        });

   
    }
     );
