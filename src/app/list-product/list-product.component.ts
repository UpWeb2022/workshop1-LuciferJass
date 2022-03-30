import { Component, OnInit } from '@angular/core';
//import { threadId } from 'worker_threads';
import { Product } from '../model/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  public titleApp: string;
  //public name : string;
  public listProduct: Product[];
  public priceMax: number=130;
 
  constructor() { 

  }

  ngOnInit(): void {
    this.titleApp='First Angular App'
    this.listProduct= [
      {id:10, 
        title:'T-shirt 1', 
        price:10, 
        quantity:10,
      picture:'https://www.teewinek.com/wp-content/uploads/2020/05/T-shirt-Luffy-D-Monkey-Cute-One-Piece-T-shirt-manga-et-anime-en-tunisie-tee-shirt-Luffy-D-Monkey-Cute-One-Piece-personnalis%C3%A9-T-shirt-Luffy.png',
    like :12,
  description: 'ceci est un t-shirt'},
  {id:11, 
    title:'T-shirt 2', 
    price:120, 
    quantity:10,
  picture:'https://ae01.alicdn.com/kf/HTB1FOnHbiLrK1Rjy1zdq6ynnpXaH/T-shirt-Little-Luffy-pour-hommes-haut-une-pi-ce-imprim-drapeau-de-Pirate-Zoro-Cool.jpg_640x640.jpg',
like :12,
description: 'ceci est un t-shirt'},
{id:12, 
  title:'T-shirt YY', 
  price:130, 
  quantity:0,
picture:'https://m.media-amazon.com/images/I/A13usaonutL._AC_CLa%7C2140%2C2000%7C81lABFrUEkL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_UL1500_.png',
like :12,
description: 'ceci est un t-shirt'}
    ]
  }
  public incrementlike (p:Product) : void{
  let i = this.listProduct.indexOf(p);
  if(i!=-1){
    this.listProduct[i].like++;

  }
}
  public buyproduct (p:Product):void{
    let i=this.listProduct.indexOf(p);
    
    if(i!=-1){
      this.listProduct[i].quantity--;
    }
  }
  
}

