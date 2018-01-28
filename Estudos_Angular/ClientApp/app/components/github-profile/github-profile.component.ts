import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-github-profile',
    templateUrl: './github-profile.component.html',
    styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

    userId: any = '';
    username: any = '';

    constructor(private route: ActivatedRoute,
                private router: Router
    ) { }

    ngOnInit() {
        console.log('Iniciou Profile');


         this.userId = this.route.snapshot.paramMap.get('userid');
         this.username = this.route.snapshot.paramMap.get('username');
         console.log(this.userId);
         console.log(this.username);



        // Dois observables ao msm tempo


   
        this.route.paramMap
            .subscribe(params => {
                let parametros = params;
                
                console.log('Params: ', parametros);
            })
    } 

    submit() {
      //  this.router.navigate(['/followers', this.userId, this.username])
        //this.router.navigate(['/followers', 1, 'aaa']);
        this.router.navigate(['/followers'], {
            queryParams: {page: 1, order: 'newest'}
        });
    }

}
