import CONFIG from "./config";

const API_ENDPOINT = {
  posts: `${CONFIG.BASE_URL}/posts`,
  postsById: (id) => `${CONFIG.BASE_URL}/posts/${id}`,
};

export default API_ENDPOINT;