import { Repository } from "typeorm";
import { Connection } from "../entities/Connection";
//Pega os métodos da classe "Repository" com o "extends":
class ConnectionsRepository extends Repository<Connection> {}

export { ConnectionsRepository };
