import articleTemplate from "./templates/arcticle.hbs";

const refs = {
  article: document.querySelector(".js-article"),
};

export default function fetchCountries(searchQuery) {
  fetch(searchQuery)
    .then((response) => response.json())
    .then((country) => {
      const markup = articleTemplate(country);
      refs.article.insertAdjacentHTML("beforeend", markup);
      console.log(country);
    });
}
