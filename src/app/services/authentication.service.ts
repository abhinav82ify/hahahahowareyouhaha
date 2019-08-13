import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  BASE_URL = "http://localhost:9090";

  constructor(private http: HttpClient) {}

  login(username, password) {
    return this.http.post<any>(`${this.BASE_URL}/authenticate`, {
      username,
      password
    });
  }
}
