import { Component, OnInit } from '@angular/core';
// Models
import { SuKien } from '../../models/sukien';
// Service
import { SuKienService } from '../su-kien.service';

import { inspect } from 'util';
import { toDate } from '@angular/common/src/i18n/format_date';

@Component({
  selector: 'app-su-kien',
  templateUrl: './su-kien.component.html',
  styleUrls: ['./su-kien.component.scss']
})
export class SuKienComponent implements OnInit {

  constructor(
    private sukienService: SuKienService,
  ) { }

  sukiens: SuKien[];
  getSuKienFromServices(): void {
    this.sukienService.getSukiens().subscribe(updatedSukiens => this.sukiens = updatedSukiens);
    // this.quangcaoService.getQuangcaos().subscribe(quangcaos=> this.quangcaos = quangcaos.slice(0, 3));
  }
  
  // add new sự kiện
  add( LinkImg: string, Tieude: string, Mota: string, Noidung: string, Posted: Date, By: string): void {

    if (Number.isNaN(Number(Posted)) || !Tieude || !Mota || !Noidung ||Number(Posted) === 0) {
      alert('Tieude, Mota, Noidung không được để trống, Posted phải nhập bằng số');
      return;
    }
    const newSuKien: SuKien = new SuKien();
    // newSuKien.Link = Link;
    newSuKien.LinkImg = LinkImg;
    newSuKien.Tieude = Tieude;
    newSuKien.Mota = Mota;
    newSuKien.Noidung = Noidung;
    newSuKien.Posted = Posted;
    newSuKien.By = By;
    this.sukienService.addSuKien(newSuKien)
      .subscribe(insertedSuKien => {
        this.sukiens.push(insertedSuKien);
      });
    alert('Thêm sự kiện Thành công!!');
  }


  ngOnInit() {
    this.getSuKienFromServices();
  }

}
