import references from "../refs/references.js";
import countriesListTemplate from "../templates/countries-list.hbs";
import countryTemplate from "../templates/country.hbs";
import runInfoNotification from "./info-notification.js";
import runErrorNotification from "./error-notification.js";

function updateCountriesMarkup(data) {
  const countriesListMarkup = countriesListTemplate(data);
  const countryMarkup = countryTemplate(data[0]);

  references.countries.innerHTML = "";

  if (data.length <= 10 && data.length !== 1) {
    references.countries.innerHTML = "";
    references.country.innerHTML = "";
    references.countries.insertAdjacentHTML("beforeend", countriesListMarkup);
  }

  if (data.length > 10 && data.length) {
    references.countries.innerHTML = "";
    references.country.innerHTML = "";
    runInfoNotification();
  }

  if (data.length === 1) {
    references.countries.innerHTML = "";
    references.country.innerHTML = "";
    references.country.insertAdjacentHTML("afterbegin", countryMarkup);
  }

  if (!data.length) {
    runErrorNotification();
    //console.clear();
  }
}

export default updateCountriesMarkup;
