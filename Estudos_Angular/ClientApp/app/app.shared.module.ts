import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';
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
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { OrderService } from "./services/order.service";
import { AuthService } from "./services/auth.service";
import { AdminComponent } from "./components/admin/admin.component";
import { LoginComponent } from "./components/login/login.component";
import { NoAccessComponent } from "./components/no-access/no-access.component";
import { MockBackend } from "@angular/http/testing";
import { fakeBackendProvider } from "./helpers/fake-backend";
import { AuthGuard } from "./services/auth-guard.service";
import { AdminAuthGuard } from "./services/admin-auth-guard.service";
import { DataService, Servicos } from "./services/data.service";
import { OrdersService } from "./services/orders.service";
import { AuthHttp } from "angular2-jwt/angular2-jwt";
import { EinsteinExemples } from "./components/einstein-exemples/einstein-exemples.component";
import { PesquisaComponent } from "./components/pesquisa/pesquisa.component";
import { AnimacoesComponent } from "./components/animacoes/animacoes.component";
import { ZippyComponent } from "./components/zippy/zippy.component";
import { TodosComponent } from "./components/todos/todos.component";




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
        GithubProfileComponent,
        NotFoundComponent,
        NoAccessComponent,
        LoginComponent,
        AdminComponent,
        EinsteinExemples,
        PesquisaComponent,
        AnimacoesComponent,
        ZippyComponent,
        TodosComponent

    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        FormsModule,
      //  BrowserAnimationsModule,
        TabsModule.forRoot(),
        ReactiveFormsModule,
        RouterModule.forRoot([
            //{ path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            {
                path: 'admin',
                component: AdminComponent,
               canActivate: [AuthGuard, AdminAuthGuard]
            },
            { path: 'login', component: LoginComponent },
            { path: 'animacoes', component: AnimacoesComponent },
            { path: 'no-access', component: NoAccessComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'app-pesquisa', component: PesquisaComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'caixinhas', component: CaixinhasComponent },
            { path: 'einstein-estudos', component: EinsteinExemples },
            { path: 'reactive-form', component: SignupFormComponent },
            { path: 'new-courses', component: NewCousesComponent },
            { path: 'posts', component: PostsComponent },
            { path: 'ngx', component: NgxComponent },
            { path: 'followers/:userid/:username', component: GithubProfileComponent },
            { path: 'followers', component: GithubFollowersComponent },
            { path: '**', component: NotFoundComponent },
         //  { path: '**', redirectTo: 'home' }
        ])
    ]
    ,
    providers: [
        ProductService,
        SupplierService,
        PostService,
        GithubFollowersService,
        DataService,
        Servicos,
        AuthService,
        AuthGuard,
        AdminAuthGuard,
        OrdersService,
  


        //Mock back-end. No mundo real, desnecessário!
        //MockBackend,
        //fakeBackendProvider,
        BaseRequestOptions,

        //to dizendo que, to substindo o ErrorHandler, para um outro manipulador de erro q eu customizei, no caso, o AppErrorHandler
        { provide: ErrorHandler, useClass: AppErrorHandler }
        
    ]
})
export class AppModuleShared {
}
