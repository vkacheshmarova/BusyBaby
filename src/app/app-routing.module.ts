import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GeneratorComponent } from './generator/generator.component';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { MenuTabComponent } from './menutab/menutab.component';
import { NewCarouselComponent } from './newcarousel/newcarousel.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'gnerator', component: GeneratorComponent, data: { text: 'Generator' } },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'menutab', component: MenuTabComponent, data: { text: 'menuTab' } },
  { path: 'newcarousel', component: NewCarouselComponent, data: { text: 'newCarousel' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
