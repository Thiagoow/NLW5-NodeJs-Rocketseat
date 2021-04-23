import { Entity, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

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

export { User };
