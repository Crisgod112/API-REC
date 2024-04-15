import { query } from "../../db/mysql";
import { User } from "../domain/User";
import { UserRepository } from "../domain/userRepository/UserRepository";

export class MysqlUserRepository implements UserRepository {
  async deleteUser(id: number): Promise<User | null> {
    throw new Error("Method not implemented.");
  }

  async registerUser(
    name: string,
    email: string,
    password: string
  ): Promise<User | null> {
    console.log("ajam");
    let user = null;
    const sql =
      "INSERT INTO users (name, email, password ) VALUES (?,?,?)";
    const params: any[] = [
      name,
      email,
      password
    ];
    try {
      const [userR]: any = await query(sql, params);
      user = new User(
        userR.id,
        name,
        email,
        password
      );
    } catch (error) {
      user = null;
    } finally {
      return user;
    }
  }

  async getUsers(): Promise<User[] | null> {
    const sql = "SELECT * FROM users";
    try {
      const [data]: any = await query(sql, []);

      const dataUsers = Object.values(JSON.parse(JSON.stringify(data)));

      return dataUsers.map(
        (user: any) =>
          new User(
            user.id,
            user.name,
            user.email,
            user.password
          )
      );
    } catch (error) {
      return null;
    }
  }

  async getById(id: number): Promise<User | null> {
    const sql = "SELECT * FROM users WHERE id=?";
    const params: any[] = [id];

    try {
      const [result]: any = await query(sql, params);
      return new User(
        result[0].id,
        result[0].name,
        result[0].email,
        result[0].password
      );
    } catch (error) {
      return null;
    }
  }
  async getbyEmail(email: string): Promise<User | null> {
    const sql = "SELECT * FROM users WHERE email=?";
    const params: any[] = [email];

    try {
      const [result]: any = await query(sql, params);

      return new User(
        result[0].id,
        result[0].name,
        result[0].email,
        result[0].password
      );
    } catch (error) {
      return null;
    }
  }
}
