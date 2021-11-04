import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  
  private API_JAVA_SPRING = "http://localhost:8080/cliente/"

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllClientes(): Observable<any> {
    return this.httpClient.get(this.API_JAVA_SPRING);
  }

  public guardarCliente(cliente:any): Observable<any> {
    return this.httpClient.post(this.API_JAVA_SPRING, cliente);
  }

  public borrarCliente(identificacion:any): Observable<any>{
    return this.httpClient.delete(this.API_JAVA_SPRING+"delete/"+identificacion);
  }

}
