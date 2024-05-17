import { Component, OnInit } from '@angular/core';
import { ScriptsService } from 'src/app/shared/services/client/scripts.service';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss']
})
export class WithdrawalComponent implements OnInit {
  authenticated:boolean =true;
  accountNumber:any = '';
  recipientName:any = '';
  selectedBankId:any = '';
  constructor(private scriptService: ScriptsService) { }

  ngOnInit(): void {
  }
  home(){
    this.scriptService.changePage('/');
  }

}
