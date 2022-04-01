import express,{Request, Response} from "express";
import { User } from "../entities/User";

const router = express.Router()

router.delete("/user/delete/:userId",async (req:Request, res:Response)=>{

    const { userId } = req.params;

    const user = await User.delete(parseInt(userId));

    console.log(user);
    return res.json(user);
    
})

export { router as userDeleteRouter };