import { Directive, HostListener, ElementRef, Input } from '@angular/core'

@Directive({
selector: '[appInputFormat]'
})

export class InputFormatDirective {

    @Input('appInputFormat') format:string;
    constructor(private el: ElementRef) { }

    //esse cara fica escutando o focus de quem recebe essa diretiva. 
    @HostListener('focus') onFocus() {
        //console.log('on Focus');
    }
    //esse cara fica escutando o blur de quem recebe essa diretiva. 
    @HostListener('blur') onBlur() {
        let value: string = this.el.nativeElement.value;

        if (this.format == 'lowercase')
            this.el.nativeElement.value = value.toLowerCase();
        else
            this.el.nativeElement.value = value.toUpperCase();
        
    }


    
}