import { COMPILER_OPTIONS, Component } from '@angular/core';
import { ProductEntity } from '../entities/product.entity';
import { CatalogService } from '../service/catalog.service';

@Component({
  selector: 'app-create-items',
  templateUrl: './create-items.component.html',
  styleUrls: ['./create-items.component.css']
})
export class CreateItemsComponent {
  constructor(private readonly productService: CatalogService) {}

  // hidde image
  hideImg: boolean =  true;

  protected productModel: ProductEntity = {
    name: '',
    category: '',
    description: '',
    price: 0,
    image: '',
    status: true
  }

  protected allProducts: ProductEntity[] = []

  // UpdatingHandler
  protected isUpdating: boolean = false;

  // CREATE ONE PRODUCT
  createProduct(e: Event): any {
    e.preventDefault()

    if (Object.values(this.productModel).some(x => x === "") || this.productModel.price == 0) {
      return console.log("Rellene correctamente todos los campos")
    } else {
      let data = this.productModel;
      data.name = this.productModel.name.trim()
      data.category = this.productModel.category.trim()
      data.description = this.productModel.description.trim()
      data.price = Number(this.productModel.price)
      data.image = this.productModel.image.trim()
      console.log(this.productModel);

      this.allProducts.push(data)
      this.isUpdating = false;
      return this.productService.createProduct(data).subscribe(res => {
        console.log(res);
        (e.target as HTMLFormElement).reset()
        this.getAllItems()
      })
    }
    return
  }

  // GET ALL PRODUCTS
  getAllItems() {
    return this.productService.getAllProducts().subscribe(res => {
      console.log(Object.values(res))
      this.allProducts = []
        Object.values(res).forEach(x => {
          this.allProducts.push(x)
        })
    })
  }

  // DELETE ONE PRODUCT
  deleteItem(e: Event) {
    const itemId = Number((e.target as HTMLElement).id)
    console.log(itemId)
    this.allProducts = this.allProducts.filter(x => x.id !== itemId)
    return this.productService.deleteProduct(itemId).subscribe(res => {
      console.log(res);
    })
  }

  protected newUpdateItem: ProductEntity = {
    id: 0,
    name: '',
    category: '',
    description: '',
    price: 0,
    image: '',
    status: true
  };

  // fill all the inputs
  fillInputs(e: Event) {
    // change updatingHandler
    this.isUpdating = true;
    // form
    const formChilds = document.querySelector("#createForm")?.children;
    // list of nodes
    const cardInfo = (e.target as HTMLElement).parentElement!.parentElement!.children;
    // fill inputs
    for (let i = 0, j = -1; i < 5; i++) {
      ((formChilds as any)[j+=2]).value = cardInfo[i+1].childNodes[1].textContent;
    }

    // item Id
    const itemId = Number((e.target as HTMLElement).id)
    this.newUpdateItem.id = itemId;
  }

  // EDIT ONE PRODUCT
  updateItem(e: Event) {
    const formElems = (e.target as HTMLFormElement).children;
    // itemId
    const uptId = Number(this.newUpdateItem.id)

    // new updated item 
       this.newUpdateItem = {
        id: uptId,
        name: (formElems[1] as HTMLFormElement)['value'],
        category: (formElems[3] as HTMLFormElement)['value'],
        description: (formElems[5] as HTMLFormElement)['value'],
        price: Number((formElems[7] as HTMLFormElement)['value']),
        image: (formElems[9] as HTMLFormElement)['value'],
        status: true
      }
      console.log(this.newUpdateItem)
      if (Object.values(this.newUpdateItem).some(x => x === "") || this.newUpdateItem.price == 0) {
        return console.log("llena todo bien para actualziar")
      } else { 
        return this.productService.updateProduct(uptId, this.newUpdateItem).subscribe(res => {
          this.getAllItems();
          (e.target as HTMLFormElement).reset();
        })
      }
  }

  ngOnInit() {
    this.getAllItems()
  }
}
