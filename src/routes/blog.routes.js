import { Router } from "express";
import { addBlog, fetchAllBlogs } from "../controllers/blog.controllers.js";

const router = Router();

router.route("/get-all-blogs").get(fetchAllBlogs);
router.route("/add-blog").post(addBlog);

export default router;
