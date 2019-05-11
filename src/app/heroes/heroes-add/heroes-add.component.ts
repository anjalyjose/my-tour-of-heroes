import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HeroesService } from '../heroes.service';
import { Router } from '@angular/router';
import { Heroes } from '../heroes.model';

@Component({
  selector: 'app-heroes-add',
  templateUrl: './heroes-add.component.html',
  styleUrls: ['./heroes-add.component.css']
})
export class HeroesAddComponent implements OnInit {

  hero: Heroes;

  formHero: FormGroup;

  constructor(private fb: FormBuilder,private hs: HeroesService,private router: Router) {}

  addHero() {
    this.hero = this.formHero.value;
    this.hs.saveHero(this.hero).subscribe(
      res => {
        this.router.navigate(['/heroes']);
      },error => {
        console.log(error)
      }
    );
  }

  ngOnInit() {
    this.formHero = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

}
