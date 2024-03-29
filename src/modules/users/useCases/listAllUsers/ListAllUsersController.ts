import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IRequest {
  user_id: string;
}
class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;

      const users = this.listAllUsersUseCase.execute({
        user_id: String(user_id),
      });

      return response.status(200).json(users).send();
    } catch (error) {
      return response.status(400).json({ error: "Erro" });
    }
  }
}

export { ListAllUsersController };
