import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
  async create(email: string) {
    const usersRepository = getCustomRepository(UsersRepository);

    //Verifica se o usuário existe:
    const userExists = await usersRepository.findOne({
      email,
    });

    //Se existir, retornada o user:
    if (userExists) {
      return userExists;
    }

    //Se não existir, salva no DB:
    const user = usersRepository.create({
      email,
    });

    await usersRepository.save(user);
    return user;
  }
}

export { UsersService };
