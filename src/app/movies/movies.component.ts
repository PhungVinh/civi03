import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { fakeMovies } from '../fake-movies';
import { Title } from '../../models/title';
import { QuangCao } from '../../models/quangcao';
// import { fakeMovies2 } from '../fake-moives2';
import { TitleService } from '../title.service';
import { QuangCaoService } from '../quang-cao.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movie: Movie = {
    id: 1,
    name: "Star Wars",
    releaseYear: 1977
  }
  movies = fakeMovies;

  // title: Title = {
  //   id: 1,
  //   link:"fsfsdf-chay-quang-cao",
  //   tieude: "cách chạy quảng cáo",
  //   noidung: "Trọn bộ những thông tin hữu ích dành cho publisher mới tập tành và các Advertiser muốn gia nhập."

  // }
  // titles = fakeMovies2;

  titles: Title[];
  constructor(
    private titleService: TitleService,
    private quangcaoService: QuangCaoService
    ) {

  }

  getTitlesFromServices(): void {
    //this.movies = this.movieService.getMovies();
    this.titleService.getTitles().subscribe(updatedTitles => this.titles = updatedTitles);
  }

  quangcaos: QuangCao[];
  getQuangCaoFromServices(): void{
    this.quangcaoService.getQuangcaos().subscribe(updatedQuangcaos => this.quangcaos = updatedQuangcaos);
  }

  ngOnInit() {
    this.getTitlesFromServices();
    this.getQuangCaoFromServices();
  }

}
