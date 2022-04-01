import express,{Request, Response} from "express";
import { Blog } from "../entities/Blog";
import { User } from "../entities/User";

const router = express.Router()

router.post("/blog/post",async (req:Request, res:Response)=>{
    const {
        title,
        desc,
        text,
        user_id
    } = req.body;

    const user = await User.findOne(parseInt(user_id));

    if(!user){
        return res.json({
            msg: "User Not Found"
        })
    }

    const blog = Blog.create({
        title,
        desc,
        text,
        user
    })

    await blog.save();
    console.log(blog);
    return res.json(blog);  
})

export { router as blogPostRouter };