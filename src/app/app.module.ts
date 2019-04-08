import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuangCaoComponent } from './quang-cao/quang-cao.component';
import { HomeComponent } from './home/home.component';
import { HuongDanComponent } from './huong-dan/huong-dan.component';
import { FAQComponent } from './faq/faq.component';
import { DangKyComponent } from './dang-ky/dang-ky.component';
import { SuKienComponent } from './su-kien/su-kien.component';
import { TinhNangMoiComponent } from './tinh-nang-moi/tinh-nang-moi.component';
import { ChienDichComponent } from './chien-dich/chien-dich.component';
import { MoviesComponent } from './movies/movies.component';
import { SuKienDetailComponent } from './su-kien-detail/su-kien-detail.component';
// Service
import { MessageService } from './message.service';
import { TitleService } from './title.service';
import { QuangCaoService } from './quang-cao.service';
import { SuKienService } from './su-kien.service';
import { UserDetailComponent } from './user-detail/user-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    QuangCaoComponent,
    HomeComponent,
    HuongDanComponent,
    FAQComponent,
    DangKyComponent,
    SuKienComponent,
    TinhNangMoiComponent,
    ChienDichComponent,
    MoviesComponent,
    SuKienDetailComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AlertModule.forRoot(),
    AngularFontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    TitleService,
    MessageService,
    QuangCaoService,
    SuKienService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
