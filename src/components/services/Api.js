import axios from 'axios';

export const getImages = async (query, page = 1) => {
  const config = {
    params: {
      q: query,
      page,
      per_page: 12,
    },
  };
  const { data } = await axios.get(
    'https://pixabay.com/api/?q=cat&page=1&key=30993441-ae129a01ad12f9b97eb01d4cf&image_type=photo&orientation=horizontal&per_page=12',
    config
  );
  console.log(data);
  return data;
};
