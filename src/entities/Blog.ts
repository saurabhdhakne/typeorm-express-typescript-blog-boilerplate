import { Entity, Column, ManyToOne, JoinColumn, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Parent } from "./utils/Parent";
import { User } from "./User";
import { Comment } from "./Comment";

@Entity()
export class Blog extends Parent {

    @Column()
    title!:string;

    @Column()
    desc!:string;

    @Column()
    text!:string;

    @ManyToOne(
        () => User,
        user => user.blog,
        {
            onDelete:"SET NULL"
        }
    )
    @JoinColumn({
        name:"user_id"
    })
    user!:User

    @OneToMany(
        () => Comment,
        comment => comment.blog,
    )
    comment!: Comment[]

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}