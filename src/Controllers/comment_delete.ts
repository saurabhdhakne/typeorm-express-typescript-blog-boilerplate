import express,{Request, Response} from "express";
import { Comment } from "../entities/Comment";

const router = express.Router()

router.delete("/comment/delete/:commentId",async (req:Request, res:Response)=>{

    const { commentId } = req.params;

    const comment = await Comment.delete(parseInt(commentId));

    console.log(comment);

    return res.json(comment);
})

export { router as commentDeleteRouter };