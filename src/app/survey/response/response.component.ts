import { Component, OnInit } from '@angular/core';
import { ScriptsService } from 'src/app/shared/services/client/scripts.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss']
})
export class ResponseComponent implements OnInit {

  constructor(private scriptService: ScriptsService) { }

  ngOnInit(): void {
  }
  home(){
    this.scriptService.changePage('/');
  }


}
