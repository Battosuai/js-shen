// const userLanguage = window.navigator.language;
function currencyFormatter(value) {
  const formattedValue = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BDT",
  }).format(value);
  return formattedValue;
}

console.log(currencyFormatter(4499.12));
