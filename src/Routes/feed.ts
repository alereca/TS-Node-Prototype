import { Router } from "express";
import { getPosts } from "../Controllers/feed";

const router = Router();

router.get("/posts", getPosts);
