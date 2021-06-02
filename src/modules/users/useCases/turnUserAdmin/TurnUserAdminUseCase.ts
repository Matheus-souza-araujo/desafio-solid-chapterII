import { User } from "modules/users/model/User";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userAlreadyExists = this.usersRepository.findById(user_id);

    if (!userAlreadyExists) {
      throw new Error("User not exists");
    }
    const admin = this.usersRepository.turnAdmin(userAlreadyExists);

    return admin;
  }
}
export { TurnUserAdminUseCase };
