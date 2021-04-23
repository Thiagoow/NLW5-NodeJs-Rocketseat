//O controller pega nossas requisições, e retorna uma resposta

import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsServices";

class SettingsController {
  async create(request: Request, response: Response) {
    const { chat, username } = request.body;

    const settingsService = new SettingsService();

    try {
      const settings = await settingsService.create({ chat, username });
      return response.json(settings);
    } catch (erroUserAlreadyExists) {
      return response.status(400).json({
        message: erroUserAlreadyExists.message,
      });
    }
  }
}

export { SettingsController };
