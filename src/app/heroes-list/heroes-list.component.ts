import { Component, OnInit } from '@angular/core';
import { Heroes } from '../heroes.model';
import { HeroesService } from '../heroes.service';
import { Router } from '@angular/router';
import {trigger, state, style, transition, animate} from '@angular/animations'

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
]
})
export class HeroesListComponent implements OnInit {

  heroes: Heroes[];

  constructor(private hs: HeroesService,private router: Router) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(){
    this.hs.getHeroes().subscribe(
      data => {
        this.heroes = data;
      });
  }

  deleteHero(id) {
    this.hs.removeHero(id).subscribe(res => {
      alert('Deleted');
      this.router.navigate(['/heroes'])
    });
  }
}
