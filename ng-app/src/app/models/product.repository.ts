import { Product } from './product';

export class ProductRepository {
  private products: Product[] = [
    {
      id: 1,
      name: 'Iphone 15',
      price: 50000,
      isActive: true,
      description: 'iyi telefon',
      imageUrl:
        'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-13-finish-unselect-gallery-3-202207_GEO_EMEA?wid=5120&hei=2880&fmt=webp&qlt=70&.v=WGQwVDZoTWdLODlMWERUbVY5M013dFgrSXpWVEhWaW9YTGlWRHFoSHU0OXplZ2trc0d4U1BPeDMxcjJZYkRERnNCckZqMTMrS3dIUWFPL2dFWXJDTmhNQnJMcnc4RkxJd3ZMc3hKZVVFWHZ2UXcrMDFsU2Ixb1NRMEpLZFhXYnlPT0VveVJJVGIwTXl0T2g1Ym5LWFN3PT0=&traceId=1',
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
        'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-13-finish-unselect-gallery-2-202207?wid=5120&hei=2880&fmt=webp&qlt=70&.v=WGQwVDZoTWdLODlMWERUbVY5M013dFgrSXpWVEhWaW9YTGlWRHFoSHU0OEZzSnVITG1JRUQvRFNkdFZtK2RYVGd2S3NaRzcrU0dmYjNHTUFiMnlsWFRocXAvNjVVaCtjTTZGTUNzOU8wNkhQM2N6WDhaeVlFWHpWOUdKN3RxR2Y=&traceId=1',
    },
  ];
  getProducts(): Product[] {
    return this.products.filter((p) => p.isActive);
  }
  getProductbyId(id: number) {
    return this.products.find((p) => p.id == id);
  }
}
