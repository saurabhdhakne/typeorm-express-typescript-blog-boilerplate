import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Parent } from "./utils/Parent";
import { User } from "./User";
import { Blog } from "./Blog";

@Entity()
export class Comment extends Parent {

    @Column()
    text!:string;

    @ManyToOne(
        () => User,
        user => user.comment,
        {
            onDelete: 'CASCADE'
        }
    )
    @JoinColumn({
        name:"user_id"
    })
    user!:User

    @ManyToOne(
        () => Blog,
        blog => blog.comment,
        {
            onDelete:"CASCADE"
        }
    )
    @JoinColumn({
        name:"blog_id"
    })
    blog!:Blog

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
}