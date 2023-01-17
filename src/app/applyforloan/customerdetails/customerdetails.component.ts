import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogcompoComponent } from 'src/app/dialogcompo/dialogcompo.component';

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
otp:number=1234;
customerobj:customer=new customer();

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  sendotp(){
if(this.customerobj.mobileNo.toString().length==10){
  this.openDialog();
}
  }


  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogcompoComponent, {
      width: '500px',
      data: {mobileNo: this.customerobj.mobileNo, otp: this.otp,enteredotp:''},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
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