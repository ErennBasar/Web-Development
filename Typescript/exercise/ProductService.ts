import { IProductService } from "./IProductService";
import { Product } from "./Product";

class ProductService implements IProductService {
  getById(id: Number): Product {
    throw new Error("Method not implemented.");
  }
  getProduct(): Array<Product> {
    throw new Error("Method not implemented.");
  }
  saveProduct(product: Product): void {
    throw new Error("Method not implemented.");
  }
  deleteProduct(product: Product): void {
    throw new Error("Method not implemented.");
  }
}
