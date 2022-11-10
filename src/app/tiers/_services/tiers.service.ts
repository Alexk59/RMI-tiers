import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class TiersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get("http://api.reporter.com/users/list/", {});
  }
}
