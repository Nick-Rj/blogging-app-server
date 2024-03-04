import mongoose from "mongoose";
import { Blog } from "../models/blog.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const fetchAllBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({});
  console.log("All blogs", blogs);

  return res
    .status(200)
    .json(new ApiResponse(200, blogs, "Blogs fetched successfully!"));
});

const addBlog = asyncHandler(async (req, res) => {
  const { heading, description, paraArray } = req.body;
  console.log("heading", heading);
  console.log("description", description);
  console.log("paraArray", paraArray);

  if ([heading, description].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required!");
  }

  if (paraArray?.some((field) => field?.trim() === "")) {
    throw new ApiError(400, "No Paragraph should be empty!");
  }

  const blog = await Blog.create({
    heading,
    description,
    paraArray,
  });

  const createdBlog = await Blog.findById(blog?._id);
  if (!createdBlog) {
    throw new ApiError(500, "Something went wrong while adding the blog!");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdBlog, "Blog Added Successfully!"));
});

export { fetchAllBlogs, addBlog };
