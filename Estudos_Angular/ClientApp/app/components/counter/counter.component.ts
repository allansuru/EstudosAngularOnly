import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html',
    styles: ['li { list-style: none }']
})
export class CounterComponent implements OnInit {

    clientes = [
        {
            id: 1,
            name: 'Nikolas Tesla',
            idade: 20,
            cidade: 'Rio de Janeiro',
            tweet:{
                body: 'amo tudo isso',
                isLiked: true,
                likesCount: 10
            }
        },
        {
            id: 2,
            name: 'SuRu',
            idade: 22,
            cidade: 'Rio de Janeiro',
            tweet: {
                body: 'amo tudo isso também',
                isLiked: true,
                likesCount: 1000000
            }
        },
        {
            id: 2,
            name: 'SuRu',
            idade: 22,
            cidade: 'Rio de Janeiro',
            tweet: {
                body: 'amo tudo isso também',
                isLiked: true,
                likesCount: 1000000
            }
        },
        {
            id: 3,
            name: 'Maria',
            idade: 12,
            cidade: 'Rio de Janeiro',
            tweet: {
                body: 'thcucha',
                isLiked: true,
                likesCount: 22
            }
        },
        {
            id: 4,
            name: 'Guilherme',
            idade: 22,
            cidade: 'São Paulo',
            tweet: {
                body: 'Quero leite',
                isLiked: true,
                likesCount: 400
            }
        },
            {
            id: 5,
            name: 'Kawana',
            idade: 22,
            cidade: 'Prudente',
            tweet: {
                body: 'Quero doce',
                isLiked: true,
                likesCount: 1000000
            }
        }
    ];


    task = {
        title: 'Review App',
        assignee: {
            name: 'John Smit'
        }
    }

    constructor() { }

    ngOnInit() {
        console.log('Clientes', this.clientes)
    }

    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }
}
