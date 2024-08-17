const API_KEY = '45301554-42ab9bd7e2b914874aa400849';
const BASE_URL = 'https://pixabay.com';

export const searchImages = searchField => {
  const urlParams = new URLSearchParams({
    key: API_KEY,
    q: searchField,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`${BASE_URL}/api/?${urlParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => data.hits)
    .catch(error => {
      console.error(error);
      return [];
    });
};
