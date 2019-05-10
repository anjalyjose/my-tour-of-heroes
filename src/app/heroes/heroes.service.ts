import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map'
import { Heroes } from './heroes.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

    uri = 'http://localhost:3000/heroes';

    constructor(private http: HttpClient) { }

    getHeroes():Observable<any>{
      return this.http.get(`${this.uri}`).map(response => response);
    }

    saveHero(data:Heroes):Observable<any> {
      return this.http.post(`${this.uri}`, data);
    }

    editHero(id):Observable<any> {
      return this.http.get(`${this.uri}/${id}`);
    }

    updateHero(data:Heroes, id):Observable<any> {
      return this.http.put(`${this.uri}/${id}`, data);
    }

    removeHero(id: number):Observable<any> {
      return this.http.delete(`${this.uri}/${id}`);
    }
}
