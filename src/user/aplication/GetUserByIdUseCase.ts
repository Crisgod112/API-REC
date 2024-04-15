import { User } from "../domain/User";
import { UserRepository } from "../domain/userRepository/UserRepository";

export class GetUSerByIdUseCase {
  constructor(readonly userRepository: UserRepository) {}

  async run (id: number):Promise <User | null>{
        try {
         
            const user = this.userRepository.getById(id);
            return user
        } catch (error) {
            return null
        }
  }
}
