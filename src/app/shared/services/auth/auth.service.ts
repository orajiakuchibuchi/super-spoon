import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ScriptsService } from '../client/scripts.service';
import { DeviceService } from '../client/device.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _auth: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private scriptService: ScriptsService, private deviceService:DeviceService) { }

  store(token:string){
    let encrypted = this.scriptService.encryptSha256(token);
    localStorage.setItem('session', encrypted);
  }
  auth(){
    const locals = localStorage.getItem('session');
    if(locals){
      try {
        const data = this.scriptService.decryptSha256(locals);
        const objdata = JSON.parse(data);
        return objdata;
      } catch (error) {
        this.clear()
        return undefined;
      }
    }else{
      this.clear()
      return undefined;
    }
  }
  isauth(){
    console.log(Date.now())
    if(!this.auth() || !this.auth().token){
      return false;
    }
    const codetoken = JSON.parse(this.scriptService.decryptSha256(this.auth().codeToken));
    if(Date.now() > (codetoken.timestamp + codetoken.expires)){
      this.deviceService.oInfoNotification('Session Expired', 'Please login again');
      this.clear();
      return false;
    }
    return true;
  }
  clear(){
    localStorage.removeItem('session');
  }
}
