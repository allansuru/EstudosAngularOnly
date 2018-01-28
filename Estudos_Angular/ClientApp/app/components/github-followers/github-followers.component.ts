import { GithubFollowersService } from './../../services/github-followers.service'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'github-followers',
    templateUrl: './github-followers.component.html',
    styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
    followers: any[];
    constructor(
        private route: ActivatedRoute,
        private service: GithubFollowersService
    ) { }



    ngOnInit() {
        // outra maneira de pegar o parametro

        Observable.combineLatest([
            this.route.queryParamMap,
            this.route.queryParamMap
        ])
            .subscribe(combined => {
                let id = combined[0].get('order');
                let page = combined[1].get('page');

                console.log('QueryParam - order: ', id);
                console.log('QueryParam - page: ', page);

               // this.service.getAll({ id: id, page: page });


            });

        this.service.getAll()
            .subscribe(followers => this.followers = followers);
      //  let id = this.route.snapshot.paramMap.get('userId');
     //   let page = this.route.snapshot.queryParamMap.get('page');
        //let order = this.route.snapshot.queryParamMap.get('order');
       // console.log('QueryParam - page: ', page);
      //  console.log('QueryParam - order: ', order);


    }
}