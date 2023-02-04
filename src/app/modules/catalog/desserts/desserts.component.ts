import { Component } from '@angular/core';
import { ProductEntity } from '../entities/product.entity';
import { CatalogService } from '../service/catalog.service';

@Component({
  selector: 'app-desserts',
  templateUrl: './desserts.component.html',
  styleUrls: ['../catalog.component.css']
})
export class DessertsComponent {
  constructor(private readonly productService: CatalogService) {}


  protected desserts: ProductEntity[] = []

  getAllProducts() {
    return this.productService.getAllProducts().subscribe(res => {
      console.log(Object.values(res))

        Object.values(res).forEach(x => {
          if (x.category === "postres") {
            this.desserts.push(x)
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
