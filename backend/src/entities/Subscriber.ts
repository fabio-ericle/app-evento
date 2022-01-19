import { Entity, PrimaryColumn } from 'typeorm';

@Entity("subscribers")
export class Subscriber {
   
   @PrimaryColumn()
   id_evento: string;

   @PrimaryColumn()
   id_user: string;
}