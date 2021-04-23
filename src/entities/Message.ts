import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("messages")
class Message {
  @PrimaryColumn()
  id: string;

  @Column()
  admin_id: string;

  @Column()
  text: string;

  @JoinColumn({ name: "user_id" })
  @ManyToOne(() => User)
  user: User;

  @Column()
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  //Construtor de um novo usuário;
  constructor() {
    //Verifica se o id já tá preenchido:
    if (!this.id) {
      //Se o id não tá preenchido, cria um novo uuid:
      this.id = uuid();
    }
  }
}

export { Message };
