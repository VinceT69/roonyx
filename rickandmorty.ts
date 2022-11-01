import { request } from 'https';

async function getData(uri: string) {
  return new Promise((resolve, reject) => {
    request(new URL(uri), (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        try {
          const results = JSON.parse(data);
          return resolve(results);
        } catch (error) {
          return reject(error);
        }
      });
    })
      .on('error', (error) => {
        return reject(error);
      })
      .end();
  }).catch((error) => {});
}

const link: string = 'https://rickandmortyapi.com/api/episode';

getData(link).then(async (data: any) => {
  const episodes = data.results;
  for (const episode of episodes) {
    const { characters } = episode;
    const characterDetails = await Promise.all(
      characters.map(async (character: string) => {
        return await getData(character);
      })
    );
    episode.characters = characterDetails;
  }
  console.log(episodes);
});
