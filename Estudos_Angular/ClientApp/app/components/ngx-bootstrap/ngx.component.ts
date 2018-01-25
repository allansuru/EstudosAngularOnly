import { Component } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap'

@Component({
    selector: 'app-ngx',
    templateUrl: './ngx.component.html',
    styleUrls: ['./ngx.component.css']
})
export class NgxComponent {
    alertMe(): void {
        setTimeout(function (): void {
            alert("You've selected the alert tab!");
        });
    }
}
