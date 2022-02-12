import express from "express";
import { downvote, filterMovie, getAllMovies, getcomment, sortBydate, top10, upvote } from "../controller/moviecontroller";


var router = express.Router()

router.post("/filter", filterMovie);
router.post("/comment",getcomment)
router.post("/upvote",upvote);
router.post("/downvote",downvote);
router.post ("/topten",top10);
router.post ("/sort",sortBydate);
router.post("", getAllMovies);

export default router;