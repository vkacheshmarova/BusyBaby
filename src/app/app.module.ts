import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxNavigationDrawerModule, IgxNavbarModule, IgxLayoutModule,
  IgxRippleModule, IgxDragDropModule, IgxTabsModule, IgxCardModule, IgxAvatarModule,
  IgxButtonModule, IgxButtonGroupModule, IgxCarouselModule, IgxIconModule, IgxCardComponent, IgxDividerModule } from 'igniteui-angular';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GeneratorComponent } from './generator/generator.component';
import { MenuTabComponent } from './menutab/menutab.component';
import { NewCarouselComponent } from './newcarousel/newcarousel.component';
import { CommonModule } from '@angular/common';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { TranslatePipe } from './translate.pipe';
import { TranslationService } from './translation.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ContactsComponent } from './contacts/contacts.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GeneratorComponent,
    MenuTabComponent,
    NewCarouselComponent,
    HeaderCompComponent,
    TranslatePipe,
    ContactsComponent
  ],
  imports: [
    MatTabsModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IgxNavigationDrawerModule,
    IgxNavbarModule,
    IgxLayoutModule,
    IgxRippleModule,
    IgxDragDropModule,
    IgxTabsModule,
    IgxCardModule,
    IgxDividerModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxButtonGroupModule,
    IgxIconModule,
    IgxCarouselModule,
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
    })

  ],
  providers: [TranslationService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}
