import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutbbComponent } from './aboutbb/aboutbb.component';
import { MontessoriComponent } from './montessori/montessori.component';
import { TranslationService } from './translation.service';
import { TranslatePipe } from './translate.pipe';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutusComponent, data: { text: 'tabAboutLabel', icon: 'child_care' } },
  { path: 'aboutproduct', component: AboutbbComponent, data: { text: 'tabAboutBB' , icon: 'home'} },
  { path: 'montessori', component: MontessoriComponent, data: { text: 'tabMontessori', icon: 'info'  } },
  { path: 'contacts', component: ContactsComponent, data: { text: 'tabContacts', icon: 'contact_phone' } },
  { path: 'error', component: UncaughtErrorComponent },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {

  constructor() {

  }
}
