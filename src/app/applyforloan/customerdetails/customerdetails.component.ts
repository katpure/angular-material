import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.scss']
})
export class CustomerdetailsComponent implements OnInit {
emptypes:any=[
  {value:'salaried',viewValue:'salaried'},
  {value:'selfemployeed',viewValue:'selfemployeed'},
  {value:'other',viewValue:'other'}
]

gender=[
  {value:'Male',viewValue:'Male'},
  {value:'female',viewValue:'Female'},

]

customerobj:customer=new customer();
  constructor() { }

  ngOnInit(): void {
  }

}
export class customer{
  employeeType!:string;
  mobileNo!:number;
  PANno!:string;
  firstname!:string;
  lastname!:string;
  dob!:string;
  gender!:string;
  pincode!:number;
  city!:string;
}