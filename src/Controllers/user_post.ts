import express,{Request, Response} from "express";
import { User } from "../entities/User";

const router = express.Router()

router.post("/user/post",async (req:Request, res:Response)=>{
    const {
        first_name,
        last_name,
        email
    } = req.body;

    const user = User.create({
        first_name,
        last_name,
        email
    })

    await user.save();
    console.log(user);
    return res.json(user);
})

export { router as userPostRouter };