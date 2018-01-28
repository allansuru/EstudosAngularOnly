import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { FavoriteComponent } from "./components/favorite/favorite.component";
import { PanelComponent } from "./components/panel/panel.component";
import { TweetLikeComponent } from "./components/tweet/tweet.component";
import { InputFormatDirective } from "./directives/input-format.directive";
import { ColapseComponent } from "./components/colapse/colapse.component";
import { CaixinhasComponent } from "./components/caixinhas/caixinhas.component";
import { ProductService } from "./services/product.service";
import { ContactComponent } from "./components/contact/contact.component";
import { SupplierService } from "./services/supplier.service";
import { SignupFormComponent } from "./components/reactiveForm/signup-form.component";
import { NewCousesComponent } from "./components/newCoursesForms/news-courses.component";
import { PostsComponent } from "./components/posts/posts.component";
import { FilterSupplierComponent } from "./components/filter-supplier/filter-supplier.component";
import { NgxComponent } from "./components/ngx-bootstrap/ngx.component";
import { TabsModule } from "ngx-bootstrap";
import { PostService } from "./services/posts.service";
import { AppErrorHandler } from "./common/app-error-handler";
import { GithubFollowersComponent } from "./components/github-followers/github-followers.component";
import { GithubFollowersService } from "./services/github-followers.service";
import { GithubProfileComponent } from "./components/github-profile/github-profile.component";



//Aqui no @ngModule registro todos componentes, pipes e diretivas
@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FavoriteComponent,
        FetchDataComponent,
        HomeComponent,
        PanelComponent,
        TweetLikeComponent,
        InputFormatDirective,
        ColapseComponent,
        CaixinhasComponent,
        ContactComponent,
        SignupFormComponent,
        NewCousesComponent,
        PostsComponent,
        FilterSupplierComponent,
        NgxComponent,
        GithubFollowersComponent,
        GithubProfileComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        TabsModule.forRoot(),
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'caixinhas', component: CaixinhasComponent },
            { path: 'reactive-form', component: SignupFormComponent },
            { path: 'new-courses', component: NewCousesComponent },
            { path: 'posts', component: PostsComponent },
            { path: 'ngx', component: NgxComponent },
            { path: 'git-followers', component: GithubFollowersComponent },
            { path: 'profile/:username', component: GithubProfileComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
    ,
    providers: [
        ProductService,
        SupplierService,
        PostService,
        GithubFollowersService,
        //to dizendo que, to substindo o ErrorHandler, para um outro manipulador de erro q eu customizei, no caso, o AppErrorHandler
        { provide: ErrorHandler, useClass: AppErrorHandler }
        
    ]
})
export class AppModuleShared {
}
