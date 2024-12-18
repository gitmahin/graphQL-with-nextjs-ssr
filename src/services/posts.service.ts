import connDb from "@/lib/connDb";
import postModel from "@/data/models/postModel";

interface SinglePostType {
  id: number;
  skip?: number;
  limit?: number;
}

class PostService {
  constructor() {
    connDb();
  }

  async getAllPosts() {
    const posts = await postModel.find();
    return posts;
  }

  async getSinglePost({ id }: SinglePostType) {
    const post = await postModel.findOne({ id });
    return post;
  }
}

const postService = new PostService();
export default postService;
