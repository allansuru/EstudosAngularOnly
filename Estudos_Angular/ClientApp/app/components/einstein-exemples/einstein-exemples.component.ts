import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'einstein-exemples',
    templateUrl: './einteins-exemples.component.html',
    styleUrls: ['./einteins-exemples.component.css']
})
export class EinsteinExemples implements OnInit {

    paletaCores = [
        {
            id: 1,
            name: 'red',
            hex: '#ADD8E6'
        },
        {
            id: 2,
            name: 'forestGreen',
            hex: '#228B22'

        },
        {
            id: 3,
            name: 'deepPink',
            hex: '#FF1493'
        },
        {
            id: 4,
            name: 'lightCyan',
            hex: '#E0FFFF'
        },
        {
            id: 5,
            name: 'gold',
            hex: '#FFD700',
        }
    ];


    constructor() { }

    ngOnInit() {
        console.log('Paleta', this.paletaCores);
    }
}
