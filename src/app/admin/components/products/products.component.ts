import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private spinner: NgxSpinnerService,
    private httpClientService: HttpClientService
  ) {}
  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);

    this.httpClientService.get<Product[]>({ 
      controller: "products"
    }).subscribe(data => console.log(data))

    // this.httpClientService.post({
    //   controller: "products"
    // },{
    //   name: "Kalem",
    //   stock:100,
    //   price: 20
    // }).subscribe();

    // this.httpClientService.put({
    //   controller: "products"
    // },
    // {
    //   id: "5a7fdd45-b012-4e2a-b8de-d9d5584462a5",
    //   name: "Tükenmez Kalem",
    //   stock: 10,
    //   price: 20
    // }).subscribe();

    // this.httpClientService
    //   .delete(
    //     {
    //       controller: 'products',
    //     },
    //     '5a7fdd45-b012-4e2a-b8de-d9d5584462a5'
    //   )
    //   .subscribe();

    // this.httpClientService.get({
    //   baseUrl: "https://jsonplaceholder.typicode.com",
    //   controller: "posts",
    // }).subscribe(data => console.log(data))


  }
}
