import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private _cart_list: any = [];
  private _cart_notification = new Subject();

  constructor() { }

  getCartList() {
    return this._cart_list;
  }

  resetCartList() {
    this._cart_list= [];
  }

  updateCartList(product: any) {
    this._cart_list.push(product);
  }

  getNotification() {
    return this._cart_notification.asObservable();
  }

  triggerNotification() {
    this._cart_notification.next();
  }

}
