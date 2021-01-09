import references from "./references.js";
import countryListTemplate from "../templates/countryListTemplate.hbs";
import countryTemplate from "../templates/countryTemplate.hbs";

import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import { info } from "@pnotify/core";

function updateCountriesMarkup(data) {
  const countryListTemplateMarkup = countryListTemplate(data);
  const countryTemplateMarkup = countryTemplate(data[0]);

  references.article.innerHTML = "";

  if (data.length > 1) {
    references.article.insertAdjacentHTML(
      "beforeend",
      countryListTemplateMarkup
    );
  }

  if (data.length > 10) {
    info({
      text: "Too many matches found. Please enter a more specific query!",
      delay: 2500,
    });
  }

  if (data.length === 1) {
    references.article.insertAdjacentHTML("beforeend", countryTemplateMarkup);
  }
}

export default updateCountriesMarkup;
