import { NgModule } from '@angular/core';
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
        FilterSupplierComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
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
            { path: '**', redirectTo: 'home' }
        ])
    ]
    ,
    providers: [
        ProductService,
        SupplierService 
    ]
})
export class AppModuleShared {
}
