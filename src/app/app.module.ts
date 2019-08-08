import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxNavigationDrawerModule, IgxNavbarModule, IgxLayoutModule,
  IgxRippleModule, IgxDragDropModule, IgxTabsModule, IgxCardModule, IgxAvatarModule,
  IgxButtonModule, IgxCarouselModule } from 'igniteui-angular';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GeneratorComponent } from './generator/generator.component';
import { MenuTabComponent } from './menutab/menutab.component';
import { NewCarouselComponent } from './newcarousel/newcarousel.component';
import { CommonModule } from '@angular/common';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { TranslatePipe } from './translate.pipe';
import { TranslationService } from './translation.service';
import {HttpClientModule, HttpClient, HttpHandler} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

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
    TranslatePipe
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
    IgxAvatarModule,
    IgxButtonModule,
    IgxCarouselModule,
    CommonModule,
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
