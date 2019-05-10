import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HeroesService } from '../heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes-add',
  templateUrl: './heroes-add.component.html',
  styleUrls: ['./heroes-add.component.css']
})
export class HeroesAddComponent implements OnInit {

  FormHero: FormGroup;

  constructor(private fb: FormBuilder,private hs: HeroesService,private router: Router) {
    this.createForm();
  }
  
  createForm() {
    this.FormHero = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

  addHero(name, age) {
    this.hs.saveHero(name, age);
    this.router.navigate(['/heroes'])
  }

  ngOnInit() {
  }

}
