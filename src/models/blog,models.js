import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
  {
    heading: {
      type: String,
      required: [true, "Blog heading is required!"],
      unique: [true, "Heading already exists!"],
    },
    description: {
      type: String,
      required: [true, "Blog description is required!"],
    },
    paraArray: [{ type: String }],
    // headerImage: {
    //   type: String,
    //   required: true,
    // },
  },
  { timestamps: true }
);

export const Blog = mongoose.model("Blog", blogSchema);
