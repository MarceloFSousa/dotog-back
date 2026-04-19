import { Behave } from 'src/behave/behave.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Item {
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Column({ type: 'int' })
    donePercent: number;

    @Column({ type: 'varchar', length: 100, nullable: true })
    description: string | null;

    @Column()
    name: string;

    @Column({ type: 'timestamp', nullable: true })
    datetimeToDo: Date | null;
    
    @ManyToOne(() => Behave, (behave) => behave.items, {
        onDelete: 'CASCADE', 
        nullable: false     
    })
    behave: Behave;
}