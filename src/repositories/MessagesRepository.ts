import { Repository, EntityRepository } from "typeorm";
import { Message } from "../entities/Message";

//Pega os métodos da classe "Repository" com o "extends":
@EntityRepository(Message)
class MessagesRepository extends Repository<Message> {}

export { MessagesRepository };
