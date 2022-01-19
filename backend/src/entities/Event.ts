import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from './User';

@Entity('events')
export class Event {
   
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column()
   title: string;

   @Column()
   description: string;

   @UpdateDateColumn()
   createdAt: Date;

   @UpdateDateColumn()
   initedAt: Date;

   @UpdateDateColumn()
   endAt: Date;

   @ManyToOne(() => User, user => user.id)
   @JoinColumn()
   user: User;
   
   @Column()
   limit: number;

   @Column()
   amountSubscriber: number;
}