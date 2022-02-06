import axios from "axios"
import API_ENDPOINT from "../globals/api-endpoint"

const PostIdb = {
    getPosts: async () => {
        return await axios.get(API_ENDPOINT.posts);
    },
    getPostsById : async (id) => {
        return await axios.get(API_ENDPOINT.postsById(id))
    },
    createPost: async (data) => {
        return await axios.post(API_ENDPOINT.posts, data);
    },
    updatePost: async (id, data) => {
        return await axios.put(API_ENDPOINT.postsById(id), data)
    },
    deletePost: async (id) => {
        return await axios.delete(API_ENDPOINT.postsById(id))
    }
}

export default PostIdb;