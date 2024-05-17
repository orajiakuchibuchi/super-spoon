import { Component, OnInit } from '@angular/core';
import { ScriptsService } from 'src/app/shared/services/client/scripts.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  constructor(private scriptService: ScriptsService) { }

  ngOnInit(): void {
  }
  home(){
    this.scriptService.changePage('/');
  }

}
