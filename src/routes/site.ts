import express from "express";
const router = express.Router();
import SiteController from "app/controllers/SiteController";

router.get("/", SiteController.home);

export default router;
