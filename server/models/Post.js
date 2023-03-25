import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    location: String,
    description: String,
    picturePath: String,
    userPicture: String,
    likes: {
      type: Map,
      of: Boolean,
    },
    commnets: {
      type: Array,
      default: [],
    }
  },
  {timestamps: true}
);

const Post = mongoose.model('Post', postSchema);

export default Post;