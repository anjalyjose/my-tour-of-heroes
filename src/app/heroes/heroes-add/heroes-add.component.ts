import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HeroesService } from '../heroes.service';
import { Router } from '@angular/router';
import { Heroes } from '../heroes.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-heroes-add',
  templateUrl: './heroes-add.component.html',
  styleUrls: ['./heroes-add.component.css']
})
export class HeroesAddComponent implements OnInit {

  hero: Heroes;

  formHero: FormGroup;

  constructor(private fb: FormBuilder,private hs: HeroesService,private router: Router, private toastr: ToastrService) {}

  addHero() {
    this.hero = this.formHero.value;
    this.hs.saveHero(this.hero).subscribe(
      () => {
        this.toastr.success('Heroes Created!', 'Created successfully');
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
