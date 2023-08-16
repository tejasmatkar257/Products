import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  pageTitle: string = 'Product List';
   
   imageWidth = 50;
   imageMargin = 2;
   showImage = false;

  //  private _listFilter: string = '';
  //  get listFilter(): string {
  //   return this._listFilter;
  //  }
  //  set listFilter(value: string){
  //   this._listFilter = value;
  //   console.log('In setter:', value);
  //   this.filteredProducts = this.performFilter(value);
  //  }

   //filteredProducts: IProduct[] = [];
  products: IProduct[] = [
    {
      "productId": 2,
      "productName":"Garden Cart",
      "productCode":"GDN-0023",
      "releaseDate":"March 18, 2023",
      "description":"50L capacity rolling garden cart",
      "price":1000,
      "starRating":4.2,
      "imageUrl": "https://jaganhardware.com/pub/media/catalog/product/g/a/garden_trolley_bkr.jpg"
      //"imageUrl": "Downloads/garden_cart.jpg"
    },
    {
      "productId":5,
      "productName":"Hammer",
      "productCode":"GUC-0012",
      "releaseDate":"April 8, 2023",
      "description":"Steel Hammer",
      "price":99.999,
      "starRating":4.5,
      "imageUrl": "https://m.media-amazon.com/images/I/61d1oZ63evL.jpg"
    },
   
  ];

// performFilter(filterBy: string) : IProduct[]{
//   filterBy = filterBy.toLocaleLowerCase();
//   return this.products.filter((product: IProduct) =>
//   product.productName.toLocaleLowerCase().includes(filterBy));
// }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

   ngOnInit(): void {
   //this.listFilter = 'cart';
  }

 
  



}
