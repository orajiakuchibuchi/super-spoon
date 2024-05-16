import { Component, OnInit } from '@angular/core';
import { ScriptsService } from 'src/app/shared/services/client/scripts.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  authenticated:boolean =true;
  banks: any[]=[
    {
      "id": 1,
      "name": "Access Bank Plc",
      "bank_code": "044",
      "logo_url": "https://www.accessbankplc.com/assets/img/logo.svg"
    },
    {
      "id": 2,
      "name": "Fidelity Bank Plc",
      "bank_code": "070",
      "logo_url": "https://www.fidelitybank.ng/assets/img/logo.svg"
    },
    {
      "id": 3,
      "name": "First City Monument Bank Plc (FCMB)",
      "bank_code": "214",
      "logo_url": "https://www.fcmb.com/assets/img/logo.svg"
    },
    {
      "id": 4,
      "name": "First Bank of Nigeria Limited",
      "bank_code": "011",
      "logo_url": "https://www.firstbanknigeria.com/assets/img/logo.svg"
    },
    {
      "id": 5,
      "name": "Guaranty Trust Bank Plc (GTBank)",
      "bank_code": "058",
      "logo_url": "https://www.gtbank.com/assets/img/logo.svg"
    },
    {
      "id": 6,
      "name": "Union Bank of Nigeria Plc",
      "bank_code": "032",
      "logo_url": "https://www.unionbankng.com/assets/img/logo.svg"
    },
    {
      "id": 7,
      "name": "United Bank for Africa Plc (UBA)",
      "bank_code": "033",
      "logo_url": "https://www.ubagroup.com/assets/img/logo.svg"
    },
    {
      "id": 8,
      "name": "Zenith Bank Plc",
      "bank_code": "057",
      "logo_url": "https://www.zenithbank.com/assets/img/logo.svg"
    },
    {
      "id": 9,
      "name": "Citibank Nigeria Limited",
      "bank_code": "023",
      "logo_url": "https://www.citigroup.com/assets/img/logo.svg"
    },
    {
      "id": 10,
      "name": "Ecobank Nigeria Plc",
      "bank_code": "050",
      "logo_url": "https://www.ecobank.com/assets/img/logo.svg"
    },
    {
      "id": 11,
      "name": "Heritage Bank Company Ltd.",
      "bank_code": "030",
      "logo_url": "https://www.hbng.com/assets/img/logo.svg"
    },
    {
      "id": 12,
      "name": "Keystone Bank Limited",
      "bank_code": "082",
      "logo_url": "https://www.keystonebankng.com/assets/img/logo.svg"
    },
    {
      "id": 13,
      "name": "Polaris Bank Limited",
      "bank_code": "076",
      "logo_url": "https://www.polarisbanklimited.com/assets/img/logo.svg"
    },
    {
      "id": 14,
      "name": "Stanbic IBTC Bank Plc",
      "bank_code": "221",
      "logo_url": "https://www.stanbicibtcbank.com/assets/img/logo.svg"
    },
    {
      "id": 15,
      "name": "Standard Chartered Bank Nigeria",
      "bank_code": "068",
      "logo_url": "https://www.sc.com/assets/img/logo.svg"
    },
    {
      "id": 16,
      "name": "Sterling Bank Plc",
      "bank_code": "232",
      "logo_url": "https://www.sterlingbankng.com/assets/img/logo.svg"
    },
    {
      "id": 17,
      "name": "Titan Trust Bank Limited",
      "bank_code": "022",
      "logo_url": "https://www.titantrustbank.com/assets/img/logo.svg"
    },
    {
      "id": 18,
      "name": "Unity Bank Plc",
      "bank_code": "215",
      "logo_url": "https://www.unitybankng.com/assets/img/logo.svg"
    },
    {
      "id": 19,
      "name": "Wema Bank Plc",
      "bank_code": "035",
      "logo_url": "https://www.wemabank.com/assets/img/logo.svg"
    },
    {
      "id": 20,
      "name": "Globus Bank Limited",
      "bank_code": "00103",
      "logo_url": "https://www.globusbank.com/assets/img/logo.svg"
    },
    {
      "id": 21,
      "name": "SunTrust Bank Nigeria Limited",
      "bank_code": "100",
      "logo_url": "https://www.suntrustng.com/assets/img/logo.svg"
    },
    {
      "id": 22,
      "name": "Providus Bank Limited",
      "bank_code": "101",
      "logo_url": "https://www.providusbank.com/assets/img/logo.svg"
    },
    {
      "id": 23,
      "name": "Jaiz Bank Plc",
      "bank_code": "301",
      "logo_url": "https://www.jaizbankplc.com/assets/img/logo.svg"
    },
    {
      "id": 24,
      "name": "Taj Bank Limited",
      "bank_code": "302",
      "logo_url": "https://www.tajbank.com/assets/img/logo.svg"
    },
    {
      "id": 25,
      "name": "Coronation Merchant Bank",
      "bank_code": "559",
      "logo_url": "https://www.coronationmb.com/assets/img/logo.svg"
    },
    {
      "id": 26,
      "name": "FBNQuest Merchant Bank",
      "bank_code": "560",
      "logo_url": "https://www.fbnquest.com/assets/img/logo.svg"
    },
    {
      "id": 27,
      "name": "FSDH Merchant Bank",
      "bank_code": "561",
      "logo_url": "https://www.fsdhgroup.com/assets/img/logo.svg"
    },
    {
      "id": 28,
      "name": "Rand Merchant Bank",
      "bank_code": "562",
      "logo_url": "https://www.rmb.com.ng/assets/img/logo.svg"
    },
    {
      "id": 29,
      "name": "Nova Merchant Bank",
      "bank_code": "563",
      "logo_url": "https://www.novambl.com/assets/img/logo.svg"
    },
    {
      "id": 30,
      "name": "Opay",
      "bank_code": "564",
      "logo_url": "https://www.novambl.com/assets/img/logo.svg"
    },
    {
      "id": 31,
      "name": "Palmpay",
      "bank_code": "565",
      "logo_url": "https://www.novambl.com/assets/img/logo.svg"
    },
    {
      "id": 32,
      "name": "Paga",
      "bank_code": "566",
      "logo_url": "https://www.novambl.com/assets/img/logo.svg"
    }
  ];
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
