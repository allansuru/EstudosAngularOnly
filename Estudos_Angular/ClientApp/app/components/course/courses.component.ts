import { Component } from '@angular/core'
import { CourseService } from "../../services/courses.service";



@Component({
    selector: 'courses',
    template: `<h2>{{   getTitle() }} </h2>
            <ul>
                    <li *ngFor="let c of courses">
                           {{ c }}
                    </li>
            </ul>
<h1  [textContent]='title2'></h1>
<img [src] = "imgUrl" />

<table>
<tr>
<td [attr.colspan]='colspan'></td>
</tr>
</table>
COM Two-Waying binding<input [(ngModel)]="email" (keyup.enter)="valueDigitado3();" /> <br>
COM Template Variables<input #valor (keyup.enter)="valueDigitado2(valor.value);" /> <br>
SEM Template Variables<input (keyup.enter)="valueDigitado($event);" /> <br>
<input (keyup.enter)="onKeyUp2();" />
<!--<input (keyup)="onKeyUp($event);" /> -->
<div (click)="clickDiv($event);">
<button type="button" (click)="ativa();onSave($event);" class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue': 'white'" [class.active]="isActive">Primary</button>
</div>
{{ course.title | uppercase }} <br />
{{ course.students | number }} <br />
{{ course.rating | number:'1.1-1'  }} <br />
{{ course.price | currency:'BRL':true:'3.2-2' }} <br />
{{ course.releaseDate | date:'shortDate' }} <br />
CUSTOM PIPES = {{text | summary:26}}
`

})

//pascal name Conventional
export class CoursesComponent {

    course = {
        title: 'Estudos Angular2+',
        rating: 4.9745,
        students: 30123,
        price: 190.05,
        releaseDate: new Date(2017,1,1)
    }
    email = 'me@email.com';
    isActive = false;
    title = "Curso! - Allan Passos";
    title2 = "Estudos e + estudos"
    colspan = 10;
    imgUrl = "http://gearnuke.com/wp-content/uploads/2016/07/final-fantasy-xv-1-2-768x432.png";

    courses: string[] = [];

    text = `Lorem IPSUM TESTE do TESTE de PIPE Lorem IPSUM TESTE do TESTE de PIPE 2 Lorem IPSUM TESTE do TESTE de PIPE 3 Lorem IPSUM TESTE do TESTE de PIPE 4  `

    //isso aqui evita o NEW - FAZENDO ISSO FICA FORTEMENTE ACOPLADO, mas pra funfar tem q add esse serviço no app.module(provider)
    //injecao de dependencia = provedor de serviços desacoplados === 'baixo acoplamento na veia'
    constructor(service: CourseService) {

        this.courses = service.getCourses();
    } 
    ativa()
    {
        this.isActive = true;
    }
    clickDiv($event: any) {
        console.log('clique DIV', $event);
    }
    onSave($event: any) {
        $event.stopPropagation(); // para a arvore do DOM, ou seja, só vai estorar o console do btn click, o da div ele caga!
        console.log('ON SAVE', $event);
        console.log($event.x);
    
    }

    getColor() {
        let isRed = 'red ! important';
    }

    getTitle() {
        return this.title;
    }
    onKeyUp($event:any) {
        if ($event.keyCode == 13) console.log('ENTER was pressed!'); //uma maneira MELHOR ABAIXO!
    }
    onKeyUp2() {
        console.log('ENTERRRR was pressed');
    }
    valueDigitado($event:any) {
        console.log('Valor Digitado UGLY: ', $event.target.value);
    }
    valueDigitado2(valor:any) {
        console.log('Valor Digitado BEAUTY-TEMPLATE VARIABLE: ', valor);
    }
    valueDigitado3(){
        console.log(this.email);
    }
}