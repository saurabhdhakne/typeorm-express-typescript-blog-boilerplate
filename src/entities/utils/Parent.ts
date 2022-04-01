import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Parent extends BaseEntity{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        default:true
    })
    isActive!:Boolean
}