import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor() {}

  users = [{ name: "John" }, { name: "Mike" }, { name: "Alice" }];

  getAllUsers() {
    return this.users;
  }

  deleteUser(name: string) {
    return this.getAllUsers().filter((user) => {
      user.name !== name;
    });
  }

  addUser(name: string) {
    return this.getAllUsers().push({ name });
  }
}
