import { Component, OnInit, Output } from '@angular/core';
import { Heroes } from '../heroes.model';
import { HeroesService } from '../heroes.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes: Heroes[] = [];

  constructor(private hs: HeroesService,private router: Router,private toastr: ToastrService) { }

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
    if(confirm("Are you sure to delete: "+id+" ?")){
      this.hs.removeHero(id).subscribe(res => {
        this.toastr.success('Heroes Delete!', 'Delete successfully');
        this.getListHeroes();
      }, error => {
        this.toastr.error('Heroes Not Delete!', 'Delete unsuccessfully');
        console.log(error);
      });
    }
  }

}
