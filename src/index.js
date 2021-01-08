const _ = require("lodash");
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import "./styles.css";
import articleTemplate from "./templates/arcticle.hbs";
import bestConsilience from "./templates/best-consilience.hbs";
import fetchCountries from "./js/fetchCountries";

const refs = {
  article: document.querySelector(".js-article"),
  search: document.querySelector(".js-search-input"),
};
// Using _.debounce() method
// with its parameters
const debounce = _.debounce((event) => {
  const url = `https://restcountries.eu/rest/v2/name/${event.target.value}`;
  refs.article.textContent = "";
  if (event.target.value.length > 0) {
    fetchCountries(url).then((country) => updateCountriesMarkup(country));
  }
}, 500);
// Toastify
const notification = Toastify({
  text: "Too many matches found. Please enter a more specific query!",
  duration: 1500,
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "right", // `left`, `center` or `right`
  backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
  stopOnFocus: true, // Prevents dismissing of toast on hover
  onClick: function () {}, // Callback after click
});

function updateCountriesMarkup(country) {
  const markup = articleTemplate(country);
  const bestResultMarkup = bestConsilience(country);
  if (country.length > 1) {
    refs.article.insertAdjacentHTML("beforeend", markup);
    console.log(country);
  }
  if (country.length > 10) {
    notification.showToast();
  }
  if (country.length === 1) {
    refs.article.textContent = "";
    document.body.insertAdjacentHTML("beforeend", bestResultMarkup);
  }
}

refs.search.addEventListener("input", debounce);
