import { Repository, EntityRepository } from "typeorm";
import { User } from "../entities/User";

//Pega os métodos da classe "Repository" com o "extends":
@EntityRepository(User)
class UsersRepository extends Repository<User> {}

export { UsersRepository };
