import { Component, OnInit } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap';
import { Servicos } from './../../services/data.service';

@Component({
    selector: 'app-ngx',
    templateUrl: './ngx.component.html',
    styleUrls: ['./ngx.component.css']
})
export class NgxComponent implements OnInit {
    tab: boolean = false;

    constructor(private servicos: Servicos) { }

    ngOnInit() {
     this.tab =   this.servicos.setTab();
    }

    alertMe(): void {
        setTimeout(function (): void {
            alert("You've selected the alert tab!");
        });
    }
}
