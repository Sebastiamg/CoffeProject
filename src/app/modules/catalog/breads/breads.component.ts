import { Component } from '@angular/core';
import { ProductEntity } from '../entities/product.entity';
import { CatalogService } from '../service/catalog.service';

@Component({
  selector: 'app-breads',
  templateUrl: './breads.component.html',
  styleUrls: ['../catalog.component.css']
})
export class BreadsComponent {
  constructor(private readonly productService: CatalogService) {}


  protected breads: ProductEntity[] = []

  getAllProducts() {
    return this.productService.getAllProducts().subscribe(res => {
      console.log(Object.values(res))

        Object.values(res).forEach(x => {
          if (x.category === "pan") {
            this.breads.push(x)
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
