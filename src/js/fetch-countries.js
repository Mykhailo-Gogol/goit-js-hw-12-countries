export default function fetchCountries(searchQuery) {
  return fetch(searchQuery).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      console.log(`HTTP Error: ${response.status}`);
    }
  });
}
