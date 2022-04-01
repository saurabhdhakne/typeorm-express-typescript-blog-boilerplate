import express,{Request, Response} from "express";
import { Blog } from "../entities/Blog";

const router = express.Router()

router.delete("/blog/delete/:blogId",async (req:Request, res:Response)=>{

    const { blogId } = req.params;

    const blog = await Blog.delete(parseInt(blogId));

    console.log(blog);
    return res.json(blog);
    
})

export { router as blogDeleteRouter };