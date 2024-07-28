import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category-repository';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, CategoryListComponent],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent {
  c: Category[];
  cr: CategoryRepository;

  constructor() {
    this.cr = new CategoryRepository();
    this.c = this.cr.getCategory();
  }
}
