import axios from 'axios';

export default axios.create({
    baseURL: 'https:api.unsplash.com',
    headers: {
        Authorization:
          'Client-ID LLFcGZl89SorC460OJHQed2fSN7jopKTK1hewCW3fKc',
      }
});
