import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ProductEntity } from '../entities/product.entity';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  readonly apiUrl = "http://localhost:3000/products";

  constructor(private readonly httpClient: HttpClient ) {}

  getAllProducts() {
    return this.httpClient.get(this.apiUrl);
  }

  createProduct(data: ProductEntity) {
    return this.httpClient.post(this.apiUrl, data);
  }
  // -----------------------------------------------------
  updateProduct(id: number, data: ProductEntity) {
    return this.httpClient.put(`${this.apiUrl}/${id}`, data);
  }

  deleteProduct(id: number) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
}
