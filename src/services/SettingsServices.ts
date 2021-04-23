import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  async create({ chat, username }: ISettingsCreate) {
    const settingsRepository = getCustomRepository(SettingsRepository);

    //Checando se já existe um usuário:
    //Select => from settings where username = "username" limit 1
    const userAlreadyExists = await settingsRepository.findOne({
      username,
    });
    if (userAlreadyExists) {
      throw new Error("One user already exists! 🥺");
      //Agora temos que passar isso pro SettingsController.
    }

    const settings = settingsRepository.create({
      chat,
      username,
    });

    await settingsRepository.save(settings);

    return settings;
  }
}

export { SettingsService };
