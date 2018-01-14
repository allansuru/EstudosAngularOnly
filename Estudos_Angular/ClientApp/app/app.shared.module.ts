import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
        ColapseComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
