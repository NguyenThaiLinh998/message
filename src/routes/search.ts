import express from "express";
import searchController from "app/controllers/SearchController";
const router = express.Router();

router.post("/search-post-form", searchController.searchPostForm);
router.get("/", searchController.index);

export default router;
