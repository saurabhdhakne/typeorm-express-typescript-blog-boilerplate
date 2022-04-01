import express,{Request, Response, NextFunction } from "express"
import { User } from "../entities/User"
import { createQueryBuilder } from "typeorm"


const router = express.Router()

router.get("/user/get/all",async (req:Request, res:Response)=>{
    const users = await createQueryBuilder(
        'user'
    )
    .select('user')
    .from(User,'user')
    .getMany();

    res.send(users);
})

export { router as usersGetRouter }