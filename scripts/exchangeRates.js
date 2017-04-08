var currentRates
var date

function getRates() {
    $.getJSON("http://api.fixer.io/latest?base=USD", function(data){
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
    alert(regExFlag);



//Gets the two different user selected currencies
    var currency1 = document.getElementById('Currency1').value
    var currency2 = document.getElementById('Currency2').value
//Matches user selected currencies to the values sent by the API
    for(var x in currentRates) {
        if(x = currency1) {
            var currency1Value = currentRates[x]
            if(x = currency2) {
                var currency2Value = currentRates[x]
                break
            }
        }
    }


    var currencyAmount = document.getElementById('userInput').value

    var result = (1/currency1Value) * currencyAmount * currency2Value

    document.getElementById('resultsArea').innerHTML = currencyAmount + " " + currency1 + " = " + result.toFixed(3) + " " + currency2
    document.getElementById('dateArea').innerHTML = "As of " + date + " 4pm CET"
    console.log(result)
    //console.log(currency1Value + " " + currency2Value)
    //console.log(currencyAmount)
    //console.log(currency1 + " " + currency2)
}
