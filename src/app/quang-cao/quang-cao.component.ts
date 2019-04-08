import { Component, OnInit } from '@angular/core';
//models
import { QuangCao } from '../../models/quangcao';
//service
// import { TitleService } from '../title.service';
import { QuangCaoService } from '../quang-cao.service';

@Component({
  selector: 'app-quang-cao',
  templateUrl: './quang-cao.component.html',
  styleUrls: ['./quang-cao.component.scss']
})
export class QuangCaoComponent implements OnInit {

  constructor(
    private quangcaoService: QuangCaoService,
    private quangcao2Service: QuangCaoService,
  ) { }

  quangcaos: QuangCao[];
  getQuangCaoFromServices(): void{
    this.quangcaoService.getQuangcaos().subscribe(updatedQuangcaos => this.quangcaos = updatedQuangcaos);
    // this.quangcaoService.getQuangcaos().subscribe(quangcaos=> this.quangcaos = quangcaos.slice(0, 3));
  }

  // quangcaos2: QuangCao[];
  // getQuangCao2FromServices(): void{
  //   // this.quangcaoService.getQuangcaos().subscribe(updatedQuangcaos => this.quangcaos = updatedQuangcaos);
  //   this.quangcao2Service.getQuangcaos().subscribe(quangcaos2=> this.quangcaos2 = quangcaos2.slice(3, 3));
  // }

  ngOnInit() {
    this.getQuangCaoFromServices();
    // this.getQuangCao2FromServices();
  }

}
