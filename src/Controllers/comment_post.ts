import express,{Request, Response} from "express";
import { Comment } from "../entities/Comment";
import { Blog } from "../entities/Blog";
import { User } from "../entities/User";

const router = express.Router()

router.post("/comment/post/:userId/:blogId",async (req:Request, res:Response)=>{
    const {
        text,
    } = req.body;

    const {
        userId,
        blogId
    } = req.params;

    const user = await User.findOne(parseInt(userId));
    const blog = await Blog.findOne(parseInt(blogId));

    if(!user){
        return res.json({
            msg: "User Not Found"
        })
    }

    if(!blog){
        return res.json({
            msg: "Blog Not Found"
        })
    }

    const comment = Comment.create({
        text,
        user,
        blog
    })

    await comment.save();
    console.log(comment);
    return res.json(comment);  
})

export { router as commentPostRouter };