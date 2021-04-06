const getDataFromApi = (page) => {
  return fetch('https://rickandmortyapi.com/api/character?page=' + page)
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          image: character.image,
          name: character.name,
          gender: character.gender,
          specie: character.species,
          origin: character.origin.name,
          status: character.status,
          episode: character.episode,
          location: character.location.name,
        };
      });
    });
};
export default getDataFromApi;
