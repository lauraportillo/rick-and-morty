const getDataFromApi = () => {
  return fetch('//rickandmortyapi.com/api/character')
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
