import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { IUsers } from "../models/users";
import { Observable, catchError, tap, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: HttpClient) {}

  users = [{ name: "John" }, { name: "Mike" }, { name: "Alice" }];

  getAllUsers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(environment.apiUrl + "users").pipe(
      // tap((data) => console.log("Data>>", JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  // getAllUsers() {
  //   return this.users;
  // }

  // deleteUser(name: string) {
  //   return (this.users = this.getAllUsers().filter(
  //     (user) => user.name !== name
  //   ));
  // }

  // addUser(name: string) {
  //   return this.getAllUsers().push({ name });
  // }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
