import { Component, OnInit } from '@angular/core';
import { Heroes } from '../heroes.model';
import { HeroesService } from '../heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes: Heroes[] = [];

  constructor(private hs: HeroesService,private router: Router) { }

  ngOnInit() {
    this.getListHeroes();
  }

  getListHeroes(){
    this.hs.getHeroes().subscribe(
      data => {
        this.heroes = data;
      }
    );
  }

  deleteHero(id) {
    const mustDelete = confirm('Deseja realmente excluir este item?');
    
    if (mustDelete){
      this.hs.removeHero(id).subscribe(res => {
        this.router.navigate(['/heroes'])
      });
    }
    
  }
}
