import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor() { }
  checkIndex(arr: any[], label: any, str: string) {
    debugger
    let objIndex = arr.findIndex(
      (obj) => obj.label == str
    );
    return objIndex;
  }
}
