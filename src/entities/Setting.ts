import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("settings")
class Setting {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  chat: boolean;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  //Construtor de uma nova settings;
  constructor() {
    //Verifica se o id já tá preenchido:
    if (!this.id) {
      //Se o id não tá preenchido, cria um novo uuid:
      this.id = uuid();
    }
  }
}

export { Setting };
