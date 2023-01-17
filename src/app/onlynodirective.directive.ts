import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlynodirective]'
})
export class OnlynodirectiveDirective {

  constructor(private el:ElementRef) { 
    // console.log(el.nativeElement);
    // el.nativeElement.onkeypress=(ele:any)=>{
    //     // console.log(ele);
    //     if(ele && ele.charCode && (ele.charCode < 48 || ele.charCode > 57)){
    //       ele.preventDefault();
    //     }
    // }
  }
 @HostBinding('style.color') color!:string;
    
@HostListener('keypress',['$event'])
onkeypress(event:any){
console.log(this.el.nativeElement);
this.color='blue'
if(event && event.which && (event.which < 48 || event.which > 57 )){
  event.preventDefault();
}
}
}


