import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlynodirective]'
})
export class OnlynodirectiveDirective {

  constructor(private el:ElementRef) { 
    console.log(el.nativeElement);
    el.nativeElement.onkeypress=(ele:any)=>{
        console.log(ele);
        if(ele && ele.charCode && (ele.charCode<48 || ele.charCode>57)){
          ele.preventDefault();
        }
    }}}
//   // }
// @HostListener('keydown')
// onkeypress(){
// console.log(th)
// }
// }
