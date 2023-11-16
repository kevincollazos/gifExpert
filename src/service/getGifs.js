export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=jvpRYDDM2Q2kLSoaFXGoThnqyGV7VzFT&q=${category}&limit=20`;
    const response = await fetch(url);
    const { data } = await response.json();
    const gifs = data.map(({ id, title, images }) => ({
      id,
      title,
      url: images.downsized.url,
    }));
    return gifs;
};
