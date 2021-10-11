import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CiudadesService {

  private API_JAVA_SPRING = "http://localhost:8080/ciudad/"
  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllCiudades(): Observable<any> {
    return this.httpClient.get(this.API_JAVA_SPRING);
  }

}
