import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    title:{
        type: String
    },
    content:{
        type: String,
        required: true
    }
} , {timestamps: true});

const Post = mongoose.model('Post', postSchema);

export default Post;