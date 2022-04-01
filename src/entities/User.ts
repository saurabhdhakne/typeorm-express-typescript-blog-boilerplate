import { Entity, Column, OneToMany } from "typeorm";
import { Parent } from "./utils/Parent";
import { Blog } from "./Blog";
import { Comment } from "./Comment";

@Entity()
export class User extends Parent {

    @Column()
    first_name!:string;

    @Column()
    last_name!:string;

    @Column({
        unique: true
    })
    email!:string;

    @OneToMany(
        () => Blog,
        blog => blog.user
    )
    blog!: Blog[]

    @OneToMany(
        () => Comment,
        comment => comment.user
    )
    comment!: Comment[]
}