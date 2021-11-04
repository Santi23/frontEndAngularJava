import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UseradminService {
  private API_JAVA_SPRING = "http://localhost:8080/v1/"

  constructor(
    private httpClient: HttpClient
  ) { }

  
  public createUserAdmin(userAdmin:any): Observable<any> {
    return this.httpClient.post(this.API_JAVA_SPRING+"create_auth", userAdmin);
  }

  public loginUserAdmin(userAdmin:any): Observable<any> {
    return this.httpClient.post(this.API_JAVA_SPRING+"login", userAdmin);
  }

}
