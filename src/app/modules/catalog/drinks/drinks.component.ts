import { Component } from '@angular/core';
import { ProductEntity } from '../entities/product.entity';
import { CatalogService } from '../service/catalog.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['../catalog.component.css']
})
export class DrinksComponent {
  constructor(private readonly productService: CatalogService) {}


  protected drinks: ProductEntity[] = []

  getAllProducts() {
    return this.productService.getAllProducts().subscribe(res => {
      console.log(Object.values(res))

        Object.values(res).forEach(x => {
          if (x.category === "bebidas") {
            this.drinks.push(x)
          } else {
            console.log(x.id)
          }


        })
    })
  }

  ngOnInit() {
    this.getAllProducts()
  }
}
