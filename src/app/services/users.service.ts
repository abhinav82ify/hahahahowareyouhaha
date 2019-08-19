import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "@/models/user.model";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  BASE_URL = "http://localhost:9090/users";

  constructor(private http: HttpClient) {}

  getUsers(beginIndex, endIndex) {
    return this.http.get<User[]>(`${this.BASE_URL}`, {
      params: { beginIndex, endIndex }
    });
  }
}
