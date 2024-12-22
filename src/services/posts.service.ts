import postModel from "@/data/models/postModel";

interface SinglePostType {
  id: number;
  skip?: number;
  limit?: number;
}

interface PostsType{
  skip: number,
  limit: number
}

class PostService {

  async getAllPosts({skip, limit}: PostsType) {
    const posts = await postModel.find().skip(skip).limit(limit);
    return posts;
  }

  async getSinglePost({ id }: SinglePostType) {
    const post = await postModel.findOne({ id });
    return post;
  }
}

const postService = new PostService();
export default postService;
