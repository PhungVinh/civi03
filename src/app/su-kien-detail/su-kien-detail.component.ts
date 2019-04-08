import { Component, OnInit, Input } from '@angular/core';
// Modles
import { SuKien } from '../../models/sukien';
//Router
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
//service
import { SuKienService } from '../su-kien.service';

@Component({
  selector: 'app-su-kien-detail',
  templateUrl: './su-kien-detail.component.html',
  styleUrls: ['./su-kien-detail.component.scss']
})
export class SuKienDetailComponent implements OnInit {
  @Input() sukien: SuKien;

  constructor(
    private route: ActivatedRoute,
    private sukienService: SuKienService,
    private location: Location,
    
  ) { }

  ngOnInit() {
    this.getSuKienFromRoute();
  }

  getSuKienFromRoute(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(`this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);
    //Call service to "get sự kiện from id" ?
    this.sukienService.getSuKienFromId(id).subscribe(sukien => this.sukien = sukien);
  }

  save():void{
    this.sukienService.updateSuKien(this.sukien).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
