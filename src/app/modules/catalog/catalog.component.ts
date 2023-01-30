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

  getAllProducts() {
    return this.productService.getAllProducts().subscribe(res => {
      console.log(Object.values(res))
        Object.values(res).forEach(x => {
          this.allProducts.push(x)
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
