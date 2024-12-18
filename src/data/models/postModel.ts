import mongoose, { Document, Schema } from "mongoose";

// Define the TypeScript interface for a PostType document.
// This ensures type safety and allows TypeScript to understand the structure of the Post model.
export interface PostType extends Document {
  userId: number; // The ID of the user associated with the post
  id: number; // Unique ID for the post
  title: string; // The title of the post
  body: string; // The content/body of the post
}

// Create a Mongoose schema that maps to the PostType interface.
// This schema defines the structure of the Post documents in the database.
const post_schema: Schema<PostType> = new Schema({
  userId: {
    type: Number, // Specifies that the `userId` field must be a number
  },
  id: {
    type: Number, // Specifies that the `id` field must be a number
  },
  title: {
    type: String, // Specifies that the `title` field must be a string
  },
  body: {
    type: String, // Specifies that the `body` field must be a string
  },
});

// Create the Mongoose model for the `Post` collection.
// If the model already exists in `mongoose.models`, reuse it; otherwise, create a new model.
const postModel =
  (mongoose.models.post as mongoose.Model<PostType>) || // Reuse existing model if available
  mongoose.model<PostType>("post", post_schema); // Create a new model with the schema

// Export the Post model for use in other parts of the application.
export default postModel;
