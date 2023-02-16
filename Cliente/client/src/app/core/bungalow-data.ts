import { InMemoryDbService } from 'angular-in-memory-web-api';

export class BungalowData implements InMemoryDbService {
  createDb() {
    let Bungalow = [
      {
        id: 0,
        idZona: 0,
        title: 'First bungalow',
        price: 24.99,
        peopleCantity: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://via.placeholder.com//820x320',
      },
      {
        id: 1,
        idZona: 2,
        title: 'Second bungalow',
        price: 24.99,
        peopleCantity: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://via.placeholder.com//820x320',
      },
      {
        id: 2,
        idZona: 0,
        title: 'First bungalow',
        price: 24.99,
        peopleCantity: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://via.placeholder.com//820x320',
      },
      {
        id: 3,
        idZona: 1,
        title: 'First bungalow',
        price: 24.99,
        peopleCantity: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://via.placeholder.com//820x320',
      },
      {
        id: 4,
        idZona: 1,
        title: 'First bungalow',
        price: 24.99,
        rating: 5,
        peopleCantity: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://via.placeholder.com//820x320',
      },
      {
        id: 5,
        idZona: 1,
        title: 'First bungalow',
        price: 24.99,
        rating: 5,
        peopleCantity: 20,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'https://via.placeholder.com//820x320',
      },
    ];
    return { bungalows: Bungalow };
  }
}
