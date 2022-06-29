const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const convertValues = async () => {
    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(function (result) {
        return result.json()
    })

    const dolar = moedas.USDBRL.high
    const euro = moedas.EURBRL.high
    const bitcoin = moedas.BTCBRL.high

    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    realValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if (select.value === "US$ Dólar americano") {
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)
    }

    if (select.value === "€ Euro") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)
    }

    if (select.value === "Ƀ BitCoin") {
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(inputReais / bitcoin)
    }

}

changeCurrency = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'US$ Dólar americano') {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/Dolar.svg"
    }

    if (select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/Euro.svg"
    }

    if (select.value === 'Ƀ BitCoin') {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/Bitcoin.svg"
    }

    convertValues()
}

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        var btn = document.querySelector("#convert-button")

        btn.click()
    }
})

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)