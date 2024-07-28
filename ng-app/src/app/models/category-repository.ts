import { Category } from './category';

export class CategoryRepository {
  private category: Category[] = [
    { name: 'Telefon', id: 1 },
    { name: 'Bilgisayar', id: 2 },
    { name: 'Televizyon', id: 3 },
  ];

  getCategory() {
    return this.category;
  }
  getCategoryById(id: number) {
    return this.category.find((p) => p.id == id);
  }
}
