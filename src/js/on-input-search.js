import references from "../refs/references.js";
import fetchCountries from "./fetch-countries";
import updateCountriesMarkup from "./update-countries-markup.js";

function onInputSearch(event) {
  event.preventDefault();
  const inputValue = event.target.value;

  if (!inputValue) {
    references.countries.innerHTML = "";
  }
  if (inputValue) {
    const url = `https://restcountries.eu/rest/v2/name/${inputValue}`;

    fetchCountries(url).then((data) => updateCountriesMarkup(data));
  }
}

export default onInputSearch;
