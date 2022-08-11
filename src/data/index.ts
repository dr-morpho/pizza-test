/* eslint-disable max-len */

import { ApiProduct } from '../redux/types';

const product: ApiProduct[] = [
  {
    title: '8 Сезонов',
    category: 'Пицца',
    description:
      'Колбаски, пепперони, халапеньо, шампиньоны, томаты, бекон, цыпленок, чеснок, огурцы соус Барбекю, соус Рэнч, фирменный томатный соус, моцарелла.',
    image: 'https://joyspizza.ru/public/images/1647971207132-4seasons1.jpg',

    price: 100,
    weight: 700,
    energy: 2220,

    size: 's',
    type: 'common',
    id: '73f5cd52-2c0d-44a0-b902-d267501a35b1',

    additionalVariants: [
      {
        price: 100,
        weight: 700,
        energy: 2220,

        size: 's',
        type: 'common',
        id: '73f5cd52-2c0d-44a0-b902-d267501a35b1',
      },
      {
        price: 200,
        weight: 900,
        energy: 2620,

        size: 'm',
        type: 'common',
        id: '43a76941-c7df-467f-9d43-834c80fb5dc2',
      },
      {
        price: 300,
        weight: 1100,
        energy: 300,

        size: 'l',
        type: 'common',
        id: '86544daa-6017-42c2-ab3e-cd689b675bae',
      },
      {
        price: 400,
        weight: 800,
        energy: 2340,

        size: 'm',
        type: 'thin',
        id: '0d716812-9557-4cee-9ed1-e9a8b6dd622f',
      },
      {
        price: 500,
        weight: 1000,
        energy: 2780,

        size: 'l',
        type: 'thin',
        id: '920f2164-8c0a-4000-ad6b-016d229f15a5',
      },
    ],
  },
];

export default product;
