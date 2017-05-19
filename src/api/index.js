export default function fetchGifs(query){
  const url = 'http://api.giphy.com/v1/gifs/search?q=' + query + '&api_key=dc6zaTOxFJmzC'
  return fetch(url)
  .then(response => response.json())
}
