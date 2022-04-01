import express,{Application,Request,Response, NextFunction} from "express";
import { createConnection } from "typeorm";
import { blogDeleteRouter } from "./Controllers/blog_delete";
import { blogPostRouter } from "./Controllers/blog_post";
import { commentDeleteRouter } from "./Controllers/comment_delete";
import { commentPostRouter } from "./Controllers/comment_post";
import { usersGetRouter } from "./Controllers/users_get";
import { userDeleteRouter } from "./Controllers/user_delete";
import { userPostRouter } from "./Controllers/user_post";
import { userUpdateRouter } from "./Controllers/user_update";
import { Blog } from "./entities/Blog";
import { Comment } from "./entities/Comment";
import { User } from "./entities/User";

const app:Application = express();

const dbConnect = async () =>{

    try{
        const connection = await createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432, 
            username: "postgres",
            password: "toor",
            database: "exampleblog",
            entities: [Blog,User,Comment],
            synchronize: true
        })
        console.log("Connected...");

        app.use(express.json());
        app.use(usersGetRouter);
        app.use(userPostRouter);
        app.use(userUpdateRouter);
        app.use(userDeleteRouter);
        app.use(blogPostRouter);
        app.use(blogDeleteRouter);
        app.use(commentPostRouter);
        app.use(commentDeleteRouter);
    }
    catch(err){
        console.error(err);
        throw new Error("Unable to connect with database...");
    }
}
dbConnect();

// app.get("/",(req:Request , res:Response)=>{
//     res.send("Hello world");
// })

// app.get("/users/get/all",users_get)

app.listen(5000,()=>{
    console.log('Server running at 5000');
})