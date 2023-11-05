const URL = `https://api.thecatapi.com/v1`;

function fetchBreeds() {
    return axios.get(`${URL}/breeds`)
    .then(response => {
      if (!response.ok) {
      throw new Error(response.status);
      }
      return response.json();
    })
  }

   
function fetchCatByBreed(breedId) {
  return axios
    .get(`${URL}/images/${breedId}`)
      .then(response => {
      if (!response.ok) {
      throw new Error(response.status);
      }
      return response.json();
    })
  }

  export { fetchBreeds, fetchCatByBreed };

