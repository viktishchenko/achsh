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
}
