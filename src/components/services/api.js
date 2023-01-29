import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://pixabay.com/api',
//   headers: { key: '31925489-f049a5b460fb8a2a8423fe357' },
//   params: {
//     _limit: 12,
//   },
// });

// export const searchImages = async (q, _page = 1) => {
//   const { data } = await instance.get('/', {
//     params: {
//       q,
//       _page,
//     },
//   });
//   return data.hits;
// };

// export const searchImages = () => {
//   axios
//     .get(
//       'https://pixabay.com/api/?q=cat&page=1&key=31925489-f049a5b460fb8a2a8423fe357&image_type=photo&orientation=horizontal&per_page=12'
//     )
//     .then(function ({ data: { hits } }) {
//       // обробка успішного запиту
//       console.log(hits);
//     })
//     .catch(function (error) {
//       // обробка помилки
//       console.log(error);
//     });
// };

// searchImages();
