import { Component } from '@angular/core';
import { ProductEntity } from './entities/product.entity';
import { CatalogService } from './service/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
  constructor(private readonly productService: CatalogService) {}
  
  protected allProducts: ProductEntity[] = []

  // Get an filter all products
  protected drinks: ProductEntity[] = []
  protected breads: ProductEntity[] = []
  protected desserts: ProductEntity[] = []

  getAllProducts() {
    return this.productService.getAllProducts().subscribe(res => {
      // console.log(Object.values(res))

        Object.values(res).forEach(x => {
          // this.allProducts.push(x)
          // console.log(x.category)

          const category = x.category;
          switch (category) {
            case "pan":
              this.breads.push(x)
              break;

            case "bebidas":
              this.drinks.push(x)
              break;
              
            case "postres":
              this.desserts.push(x)
              break;
            default:
              console.log("Switch ERROR")
              break;
          }

        })
    })
  }

  comprar() {
    console.log("comprado")
  }


  ngOnInit() {
    this.getAllProducts()
  }
}
