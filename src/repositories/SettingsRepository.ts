import { Repository, EntityRepository } from "typeorm";
import { Setting } from "../entities/Setting";

//Pega os métodos da classe "Repository" com o "extends":
@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {}

export { SettingsRepository };
