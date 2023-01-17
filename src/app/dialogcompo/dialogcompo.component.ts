import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogcompo',
  templateUrl: './dialogcompo.component.html',
  styleUrls: ['./dialogcompo.component.scss']
})
export class DialogcompoComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogcompoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  verifyotp(otp:any){
if(this.data.otp==otp){
  this.dialogRef.close();

}
  }
  ngOnInit(): void {
  }

}
