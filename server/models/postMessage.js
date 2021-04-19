import mongoose from 'mongoose';

// Create a schema for the posts
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// Turn the schema into a model
const PostMessage = mongoose.model('PostMessage', postSchema)

// Export mongoose model from the postMessage file
// Can run commands on the model like find, create, delete and update
export default PostMessage;
