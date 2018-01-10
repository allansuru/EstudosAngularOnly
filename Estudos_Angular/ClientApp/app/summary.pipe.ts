import { Pipe, PipeTransform } from '@angular/core';

//Mais um decorator, e lembrando, sempre é um objeto ({}) = OBJETO = JSON
// pra usá-lo preciso adicionar(SummaryPipe) ele no app.module em 'declarations'
@Pipe({
    name: 'summary'
})

export class SummaryPipe implements PipeTransform {
    //posso ter inúmeros parametros value: string, limits?: number, limits2? : number ...
    transform(value: string, limits?: number) {

        if (!value)
            return null;

        let defaultLimit = (limits) ? limits : 50;

        return value.substring(0, defaultLimit) + '...';

    }

}