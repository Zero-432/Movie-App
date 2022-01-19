const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "217f7b2223c508e46898ef6f50b66221",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
