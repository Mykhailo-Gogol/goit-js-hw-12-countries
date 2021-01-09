export default function fetchCountries(searchQuery) {
  return fetch(searchQuery).then((response) => response.json());
}
