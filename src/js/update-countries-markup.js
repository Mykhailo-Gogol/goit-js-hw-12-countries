import references from "../refs/references.js";
import countriesListTemplate from "../templates/countries-list.hbs";
import countryTemplate from "../templates/country.hbs";
import runNotification from "./notification.js";

function updateCountriesMarkup(data) {
  const countriesListMarkup = countriesListTemplate(data);
  const countryMarkup = countryTemplate(data[0]);

  references.article.innerHTML = "";

  if (data.length > 1) {
    references.article.insertAdjacentHTML("beforeend", countriesListMarkup);
  }

  if (data.length > 10) {
    runNotification();
  }

  if (data.length === 1) {
    references.article.insertAdjacentHTML("beforeend", countryMarkup);
  }
}

export default updateCountriesMarkup;