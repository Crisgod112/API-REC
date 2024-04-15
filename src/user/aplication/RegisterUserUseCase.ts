import { User } from "../domain/User";
import { UserRepository } from "../domain/userRepository/UserRepository";

export class RegisterUserUseCase {
  constructor(readonly userRepository: UserRepository

  ) {}

  async run(
    name: string,
    email: string,
    password: string
  ): Promise<User | null> {
    
    try {
      const user = await this.userRepository.registerUser(
        name,
        email,
        password
      );
      if(user){
        // envio a cola de broker 
      }
      return user;
    } catch (error) {
      return null;
    }
  }
}
