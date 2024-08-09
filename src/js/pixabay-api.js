const API_KEY = '45301554-42ab9bd7e2b914874aa400849';

export function searchImages(searchField) {
  const url = 'https://pixabay.com/api/?key='+API_KEY+'&q='+encodeURIComponent(searchField)+'&image_type=photo&orientation=horizontal&safesearch=true';
  return fetch(url)
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
}
