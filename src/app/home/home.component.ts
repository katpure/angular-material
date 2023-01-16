import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tenure:number=0;
  rateofintrest:number=0;
  loanamount:number=0;
  emi:number=0;
  
  constructor() { }

  ngOnInit(): void {
    this.calculateEmi();

  }
  calculateEmi(){
    var roi=(1+(this.rateofintrest/12/100));
    this.emi=((this.loanamount*roi) * Math.pow(roi,this.tenure)) /Math.pow(roi,(this.tenure-1));
    console.log(this.emi)

  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
}
