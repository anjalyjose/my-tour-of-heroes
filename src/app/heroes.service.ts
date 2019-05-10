import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

    uri = 'http://localhost:3000/heroes';

    constructor(private http: HttpClient) { }

    getHeroes():Observable<any>{
      return this.http.get(`${this.uri}`).map(res => {return res});
    }

    saveHero(name, age) {
      const obj = {
        name: name,
        age: age
      };
      this.http.post(`${this.uri}`, obj).subscribe(res => {return res});
    }

    editHero(id) {
      return this.http.get(`${this.uri}/${id}`);
    }

    update(name, age, id) {
      const obj = {
          name: name,
          age: age,
        };
      this.http.put(`${this.uri}/${id}`, obj).subscribe(res => console.log('Done'));
    }

    removeHero(id: number) {
      return this.http.delete(`${this.uri}/${id}`);
    }
}
