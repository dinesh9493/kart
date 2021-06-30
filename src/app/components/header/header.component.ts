import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";

import { SharedService } from '../../modules/shared/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems: any = [
    {
      label: 'Product',
      icon: 'pi pi-fw pi-star',
      command: () => {
        this.navigate("/product")
      }
    },
    {
      label: 'Cart',
      icon: 'pi pi-fw pi-shopping-cart',
      command: () => {
        this.navigate("/cart")
      }
    },
    {
      label: 'Checkout',
      icon: 'pi pi-fw pi-wallet',
      command: () => {
        this.navigate("/checkout")
      }
    },
  ];

  itemsInCart: number = 0;

  constructor(
    private router: Router,
    private sharedService: SharedService,
  ) { }

  ngOnInit(): void {
    this.subscribeToEvents();
  }

  navigate(route: string) {
    this.router.navigateByUrl(route);
  }

  subscribeToEvents() {
    this.sharedService.getNotification().subscribe(
      (res: any) => {
        this.updateCartCount();
      }
    );

    this.router.events.subscribe((e: any) => {
      if(e instanceof NavigationEnd) {
        this.updateNavStyle(e.url);
      }
    });
  }

  updateNavStyle(url: string) {
    this.menuItems.forEach((item: any) => {
      item.style = {};
      if(url.indexOf(item.label.toLowerCase()) !== -1) {
        item.style = { backgroundColor: "green" };
      }
    });
  }

  updateCartCount() {
    this.itemsInCart = this.sharedService.getCartList().length;
  }

  goToCart() {
    this.router.navigateByUrl("/cart");
  }

}
