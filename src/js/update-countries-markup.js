import references from "../refs/references.js";
import countriesListTemplate from "../templates/countries-list.hbs";
import countryTemplate from "../templates/country.hbs";
import runInfoNotification from "./info-notification.js";
import runErrorNotification from "./error-notification.js";

function updateCountriesMarkup(data) {
  references.countries.innerHTML = "";
  references.country.innerHTML = "";
  if (data) {
    if (data.length <= 10 && data.length !== 1) {
      const countriesListMarkup = countriesListTemplate(data);

      references.countries.insertAdjacentHTML("beforeend", countriesListMarkup);
    }

    if (data.length > 10 && data.length) {
      runInfoNotification();
    }

    if (data.length === 1) {
      const countryMarkup = countryTemplate(data[0]);

      references.country.insertAdjacentHTML("afterbegin", countryMarkup);
    }
  }
  if (!data) {
    runErrorNotification();
    //console.clear();
  }
}

export default updateCountriesMarkup;
