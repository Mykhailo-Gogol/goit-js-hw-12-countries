//const _ = require("lodash");
import "./styles.css";
import references from "./js/references.js";
import fetchCountries from "./js/fetchCountries";
import updateCountriesMarkup from "./js/updateCountriesMarkup.js";
import { debounce } from "debounce";

import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";

function onInput(event) {
  event.preventDefault();
  const inputValue = event.target.value;

  if (!inputValue) {
    references.article.innerHTML = "";
  }
  if (inputValue) {
    const url = `https://restcountries.eu/rest/v2/name/${inputValue}`;
    fetchCountries(url).then((data) => updateCountriesMarkup(data));
  }
}

references.search.addEventListener("input", debounce(onInput, 500));
