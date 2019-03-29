import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

    uri = 'http://localhost:3000/heroes';

    constructor(private http: HttpClient) { }

    getHeroes(){
      return this.http.get(`${this.uri}`);
    }

    saveHero(name, age) {
      const obj = {
        name: name,
        age: age
      };
      this.http.post(`${this.uri}`, obj).subscribe(res => console.log('Done'));
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
      console.log(id);
      return this.http.delete(`${this.uri}/${id}`);
    }
}
