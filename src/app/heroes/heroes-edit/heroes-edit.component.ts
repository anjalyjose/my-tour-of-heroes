import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-heroes-edit',
  templateUrl: './heroes-edit.component.html',
  styleUrls: ['./heroes-edit.component.css']
})
export class HeroesEditComponent implements OnInit {

  hero: any = {};

  formHero: FormGroup;
  
  id: number;

  constructor(private route: ActivatedRoute, private router: Router, private hs: HeroesService, private fb: FormBuilder) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.hs.editHero(params['id']).subscribe(res => {
          this.hero = res;
          this.id = params['id'];
          this.formHero.setValue({
            name: this.hero.name,
            age: this.hero.age
          });
      });
    });
    this.formHero = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required]
    });
  }
  updateHero(){
    this.hero = this.formHero.value;
    this.hs.updateHero(this.hero,this.id).subscribe(
      res => {
        this.router.navigate(['/heroes']);
      },error => {
        console.log(error)
      }
    ); 
  }
}