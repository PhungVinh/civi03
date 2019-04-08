import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/trang-chu', pathMatch: 'full' },
  { path: 'cach-chay-quang-cao', component: QuangCaoComponent },
  { path: 'trang-chu', component: HomeComponent },
  { path: 'huong-dan', component: HuongDanComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'dang-ky', component: DangKyComponent },
  { path: 'su-kien', component: SuKienComponent },
  { path: 'tinh-nang-moi', component: TinhNangMoiComponent },
  { path: 'chien-dich', component: ChienDichComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'su-kien-detail/:id', component: SuKienDetailComponent },
  { path: 'user-detail', component: UserDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
