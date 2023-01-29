import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api',

  params: {
    per_page: 12,
    key: '31925489-f049a5b460fb8a2a8423fe357',
    page: 1,
    image_type: 'photo',
    orientation: 'orientation',
  },
});

export const searchImages = async q => {
  const { data } = await instance.get('/?&', {
    params: {
      q,
    },
  });
  return data.hits;
};
