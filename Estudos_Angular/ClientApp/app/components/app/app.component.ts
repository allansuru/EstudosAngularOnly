import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    courses = [1, 2];
    newCourses: any;

    viewMode = 'list';

    post = {
        title: "Title",
        isFavorite: true
    }

    tweet = {
        body: 'O corpo do tweet',
        isLiked: true,
        likesCount: 10
    }



    onFavoriteChanged(eventsArgs: object) {
        //assinante
        console.log('changed:', eventsArgs);
    }
    mostraLista() {
        let result;
        result = (this.courses.length > 0) ? true : false
        return result;
    }
    onAdd() {
        this.newCourses.push({ id: 8, name: 'ASP' });
    }
    removeNewCourse(curso: any) {

        let index = this.newCourses.indexOf(curso);
        console.log('Index', index);

        this.newCourses.splice(index, 1); //remove o index somente, se nao passar o 1, remove do index pra baixo!!

        console.log('removido', this.newCourses);
    }
    loadCourses() {

        this.newCourses = [
            { id: 1, name: 'C#' },
            { id: 2, name: 'JAVA' },
            { id: 3, name: 'REACT' },
            { id: 4, name: 'ANGULAR' },
            { id: 5, name: 'IONIC' },
            { id: 6, name: 'SHAREPOINT' },
            { id: 7, name: '.NETCORE' }
        ];
    }
    trackCourse(index: any, newCourse: any) {
        // pra caso tenhamos listas muito grandes, o track melhora a perfomace!!
        console.log('track');
        return newCourse ? newCourse.id : undefined;
    }

}
