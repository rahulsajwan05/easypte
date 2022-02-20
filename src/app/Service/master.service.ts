import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  mastersApiUrl:any|any;
  constructor() { }

  
  getmasterApiUrl(){
    this.mastersApiUrl='https://pos.dbtfert.nic.in/mfmsapis';
          return this.mastersApiUrl;
  };
}
