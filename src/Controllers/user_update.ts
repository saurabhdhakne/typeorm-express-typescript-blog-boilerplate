import express,{Request, Response} from "express";
import { User } from "../entities/User";

const router = express.Router()

router.put("/user/update/:userId",async (req:Request, res:Response)=>{

    const { userId } = req.params;

    const {
        first_name,
        last_name,
    } = req.body;

    const user = await User.update(
        userId,
        {"first_name":first_name,"last_name":last_name},
    )

    console.log(user);
    return res.json(user);
})

export { router as userUpdateRouter };