import { Item } from 'src/item/item.entity';
import { Key } from 'src/key/key.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Behave {
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Column()
    name:string
    @OneToMany(() => Item, (item) => item.behave)
    items: Item[]

    @ManyToOne(()=> Key, (key) => key.behaves)
    key:Key;
}

