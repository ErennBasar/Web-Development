import { Component } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  product = {
    id: 1,
    name: 'Iphone 14',
    price: 40000,
    isActive: true,
    description: 'iyi telefon',
    imageUrl:
      'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-model-unselect-gallery-2-202303_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=NjB6M3BqTGRudDZtakJrUG5tT2pHTGdzSmpObkZCM3MrNmJ5SkhESlNDZ1hBSXMwL2Jwdk9oTk42KzZHdTdNUXovdld4NkVCZ3JUZXJyZ1dUb1MwM0dKTG1lVWJJT2RXQWE0Mm9rU1V0V0IxZG1zQmhZY3FpN094bFJrYnF5eDR2azA1RzdtcFQ5a1dBaURTY0hJUEJBPT0=&traceId=1',
  };

  productList = ['Iphone 15', 'Iphone14', 'Iphone 13'];

  products = [
    {
      id: 1,
      name: 'Iphone 15',
      price: 50000,
      isActive: true,
      description: 'iyi telefon',
      imageUrl:
        'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-model-unselect-gallery-2-202303_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=NjB6M3BqTGRudDZtakJrUG5tT2pHTGdzSmpObkZCM3MrNmJ5SkhESlNDZ1hBSXMwL2Jwdk9oTk42KzZHdTdNUXovdld4NkVCZ3JUZXJyZ1dUb1MwM0dKTG1lVWJJT2RXQWE0Mm9rU1V0V0IxZG1zQmhZY3FpN094bFJrYnF5eDR2azA1RzdtcFQ5a1dBaURTY0hJUEJBPT0=&traceId=1',
    },
    {
      id: 2,
      name: 'Iphone 14',
      price: 40000,
      isActive: true,
      description: 'iyi telefon',
      imageUrl:
        'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-model-unselect-gallery-2-202303_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=NjB6M3BqTGRudDZtakJrUG5tT2pHTGdzSmpObkZCM3MrNmJ5SkhESlNDZ1hBSXMwL2Jwdk9oTk42KzZHdTdNUXovdld4NkVCZ3JUZXJyZ1dUb1MwM0dKTG1lVWJJT2RXQWE0Mm9rU1V0V0IxZG1zQmhZY3FpN094bFJrYnF5eDR2azA1RzdtcFQ5a1dBaURTY0hJUEJBPT0=&traceId=1',
    },
    {
      id: 3,
      name: 'Iphone 13',
      price: 30000,
      isActive: true,
      description: 'iyi telefon',
      imageUrl:
        'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-14-model-unselect-gallery-2-202303_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=NjB6M3BqTGRudDZtakJrUG5tT2pHTGdzSmpObkZCM3MrNmJ5SkhESlNDZ1hBSXMwL2Jwdk9oTk42KzZHdTdNUXovdld4NkVCZ3JUZXJyZ1dUb1MwM0dKTG1lVWJJT2RXQWE0Mm9rU1V0V0IxZG1zQmhZY3FpN094bFJrYnF5eDR2azA1RzdtcFQ5a1dBaURTY0hJUEJBPT0=&traceId=1',
    },
  ];
}
