var currentRates

function getRates() {
    $.getJSON("http://api.fixer.io/latest?base=USD", function(data){
        currentRates = data.rates
        console.log(currentRates);
    });
}

getRates();

function convertCurrency() {
    var currency1 = document.getElementById('Currency1').value
    var currency2 = document.getElementById('Currency2').value

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

    document.getElementById('resultsArea').innerHTML = currencyAmount + " " + currency1 + " Is equal to " + result.toFixed(4) + " " + currency2
    console.log(result)
    //console.log(currency1Value + " " + currency2Value)
    //console.log(currencyAmount)
    //console.log(currency1 + " " + currency2)
}
