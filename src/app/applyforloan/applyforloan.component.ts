import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-applyforloan',
  templateUrl: './applyforloan.component.html',
  styleUrls: ['./applyforloan.component.scss']
})
export class ApplyforloanComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
