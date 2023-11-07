const URL = `https://api.thecatapi.com/v1`;

function fetchBreeds() {
    return fetch(`${URL}/breeds`)
    .then(response => {
      if (!response.ok) {
      throw new Error(response.status);
      }
      return response.json();
    })
  }

   

function fetchCatByBreed(breedId) {
  return fetch(`${URL}/images/${breedId}`)
      .then(response => {
      if (!response.ok) {
      throw new Error(response.status);
      }
      return response.json();
    })
  }

  export { fetchBreeds, fetchCatByBreed };

