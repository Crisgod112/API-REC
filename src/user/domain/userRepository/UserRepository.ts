import { User } from "../User";

export interface UserRepository{
    registerUser(
        name : string,
        email: string,
        password : string 
    ): Promise <User | null>;
    getUsers(): Promise <User[]| null>;
    getById(id: number): Promise<User | null>;
    getbyEmail(email:string): Promise<User | null>;
    deleteUser(id:number): Promise <User | null >;
}