import { Behave } from 'src/behave/behave.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Unique } from 'typeorm';

export enum KeyType {
    FREE = 'free',
    PREMIUM = 'premium'
}

@Entity()
export class Key {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique: true})
    key: string;

    @Column({
        type: 'enum',
        enum: KeyType,
        default: KeyType.FREE
    })
    keyType: KeyType;

    @OneToMany(()=> Behave, (behave) => behave.key)
    behaves?:Behave[]
}