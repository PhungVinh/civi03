import { Component, OnInit } from '@angular/core';
// import { Movie } from '../../models/movie';
//models
import { Title } from '../../models/title';
//service
import { TitleService } from '../title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  titles: Title[];
  constructor(private titleService: TitleService) { 

  }

  getTitlesFromServices(): void {
    //this.movies = this.movieService.getMovies();
    // lấy ra tất cả data
    this.titleService.getTitles().subscribe(updatedTitles => this.titles = updatedTitles);
    // lấy thành từ vị tri 1 đến vị tri 5
    // this.titleService.getTitles().subscribe(titles=> this.titles = titles.slice(1, 5));
  }

  ngOnInit() {
    this.getTitlesFromServices();
  }

}
