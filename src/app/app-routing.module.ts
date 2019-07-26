import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AddComponent } from './components/jobs/add/add.component';
import { ListComponent } from './components/jobs/list/list.component';
import { environment } from 'src/environments/environment.prod';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiUrlInterceptor, API_URL } from './interceptor/url.interceptor';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'jobs',
    children: [
      { path: 'add', component: AddComponent },
      { path: 'list', component: ListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
   {
     provide: API_URL,
     useValue: environment.apiUrl,
   },
   {
     provide: HTTP_INTERCEPTORS,
     useClass: ApiUrlInterceptor,
     multi: true,
     deps: [API_URL]
   } 
  ]
})
export class AppRoutingModule { }