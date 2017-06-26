var currentRates;
var date;

//On document load, fetch API data from Fixer.io and store data.
$(document).ready(function() {
    $.getJSON("http://api.fixer.io/latest?base=USD", function(data) {
        currentRates = data.rates;
        //add USD value (USD value isn't generated in the API as it i used as the base currnecy)
        currentRates.USD = 1;
        date = data.date;
        console.log(data);
    });
});

function convertCurrency() {
    //Validates the user input amount to make sure it is an integer
    var myRegEx = /^-?\d+\.?\d*$/;
    var regExFlag = myRegEx.test($("#userInput").val());
    //if input is invalid, reset all text areas + give error message
    if ((document.getElementById("Currency1").value == "") || document.getElementById("Currency2").value == "") {
        alert("Please Select two currencies");
        $("#userInput").val("");
    } else {
        if (regExFlag === false) {
            alert("Please enter a valid amount")
            $("#userInput").val("");
            $("#result").html("");
            $("#dateArea").html("");
            $("#conversionOutput").html("");
        } else if (regExFlag === true) {
            //Gets the two different user selected currencies
            var currency1 = $("#Currency1").val();
            var currency2 = $("#Currency2").val();
            //Matches user selected currencies to the values sent by the API
            for (var x in currentRates) {
                if (x = currency1) {
                    var currency1Value = currentRates[x];
                    if (x = currency2) {
                        var currency2Value = currentRates[x];
                        break;
                    }
                }
            }
            //conversion equation + display result
            var currencyAmount = $("#userInput").val();
            var result = (1 / currency1Value) * currencyAmount * currency2Value;
            $("#result").html(result.toFixed(3) + " " + currency2);
            $("#conversionOutput").html(" = " + currencyAmount + " " + currency1);
            $("#dateArea").html("As of " + date + " 4pm CET");
        }
    }
}
