const exButton = document.querySelector(".ExchangeButton");
const currencySelect = document.querySelector(".currencySelect");

function convertValue() {
  const inputValue = document.querySelector(".inputMoney").value;
  const valueToExchange = document.querySelector(".initialValue");
  const valueExchanged = document.querySelector(".finalValue");
  const exFlag = document.querySelector(".currencyImg")

  const dolarT = 5.2;
  const euroT = 5.35;
  const poundT = 6.27;

  valueToExchange.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputValue);

  if (currencySelect.value == "dolar") {
    valueExchanged.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(inputValue / dolarT);
      exFlag.src = '/ASSETS/usa.png'
  }
  if (currencySelect.value == "euro") {
    valueExchanged.innerHTML = new Intl.NumberFormat("es-EU", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue / euroT);
    exFlag.src = '/ASSETS/euro.png'
  }
  if (currencySelect.value == "pound") {
    valueExchanged.innerHTML = new Intl.NumberFormat("en-UK", {
      style: "currency",
      currency: "GBP",
    }).format(inputValue / poundT);
    exFlag.src = '/ASSETS/pound.png'
  }
}

function changeCurrency() {
    
}
exButton.addEventListener("click", convertValue);
