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
  FormHeroEdit: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private hs: HeroesService,
    private fb: FormBuilder) {
      this.createForm();
  }

  createForm() {
    this.FormHeroEdit = this.fb.group({
      name: ['', Validators.required ],
      age: ['']
    });
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.hs.editHero(params['id']).subscribe(res => {
          this.hero = res;
      });
    });
  }

  updateHero(name, age) {
    this.route.params.subscribe(params => {
       this.hs.update(name, age, params['id']);
       this.router.navigate(['heroes']);
    });
  }
}
