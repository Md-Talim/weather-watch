import axios from 'axios';

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  params: {
    key: process.env.NEXT_PUBLIC_API_KEY,
  },
});
