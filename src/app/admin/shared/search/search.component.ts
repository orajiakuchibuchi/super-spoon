import { Component, OnInit, Output,EventEmitter,Input } from '@angular/core';
import { DeviceService } from 'src/app/shared/services/client/device.service';
import { ScriptsService } from 'src/app/shared/services/client/scripts.service';

declare const $: any;
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  id: string = `SearchModal${this.scriptService.generateRandomAlphanumeric(15)}`;
  checkoutid: string = `Checkout0662`;
  @Input('key') key: any = '';
  @Output('clicked') clicked: EventEmitter<any> = new EventEmitter();
  @Output('keyChanged') keyChanged: EventEmitter<any> = new EventEmitter();
  constructor(private scriptService: ScriptsService, private ds: DeviceService) { }

  ngOnInit(): void {

  }
  show() {
    $(`#${this.id}`).appendTo("body").modal('show');
  }
  closemodal() {
    $(`#${this.id}`).modal('toggle');
  }
  remove(id: any) {

  }
  onNgModelChange($event) {
    // this.keyChanged.emit(this.key);
  }
  search() {
    if (this.key.length > 0) {
      this.keyChanged.emit(this.key);
    } else {
      this.ds.oInfoNotification('Required', 'Order ID is required');
      this.keyChanged.emit('');
      this.clicked.emit(undefined);
    }
    this.closemodal();
  }
}
