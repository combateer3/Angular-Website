import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ProjectsComponent} from './projects/projects.component';
import {HomeComponent} from './home/home.component';
import {ContactMeComponent} from './contact-me/contact-me.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'projects', component: ProjectsComponent},
  {path: 'contact', component: ContactMeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled'})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
