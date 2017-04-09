var currentRates
var date

function getRates() {
    $.getJSON("http://api.fixer.io/latest?base=USD", function(data) {
        currentRates = data.rates
        date = data.date
        console.log(currentRates);
        console.log(date);
    });
}
getRates();

function convertCurrency() {
    //Validates the user input amount to make sure it is an integer
    var myRegEx = /^-?\d+\.?\d*$/
    var regExFlag = myRegEx.test(document.getElementById('userInput').value)
    //if input is invalid, reset all text areas + give error message
    if ((document.getElementById('Currency1').value == "") || document.getElementById('Currency2').value == "") {
        alert("Please Select two currencies")
    } else {
        if (regExFlag === false) {
            alert("Please enter a valid amount")
            document.getElementById('userInput').value = ""
            document.getElementById('resultsArea').innerHTML = ""
            document.getElementById('dateArea').innerHTML = ""
        } else if (regExFlag === true) {
            //Gets the two different user selected currencies
            var currency1 = document.getElementById('Currency1').value
            var currency2 = document.getElementById('Currency2').value

            //Matches user selected currencies to the values sent by the API
            for (var x in currentRates) {
                if (x = currency1) {
                    var currency1Value = currentRates[x]
                    if (x = currency2) {
                        var currency2Value = currentRates[x]
                        break
                    }
                }
            }
            //conversion equation + display result
            var currencyAmount = document.getElementById('userInput').value
            var result = (1 / currency1Value) * currencyAmount * currency2Value
            document.getElementById('result').innerHTML = result.toFixed(3) + " " + currency2
            document.getElementById('conversionOutput').innerHTML = " = " + currencyAmount + " " + currency1
            document.getElementById('dateArea').innerHTML = "As of " + date + " 4pm CET"
            console.log(result)
        }
    }
}
