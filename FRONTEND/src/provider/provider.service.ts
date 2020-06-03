import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) { }


getPrueba() {
  return this.http.get('http://randomuser.me/api/?results=25');
}
}
