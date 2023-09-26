import { createSlice } from '@reduxjs/toolkit';


export const featuredProductsSlice = createSlice({
  name: 'featuredProducts',
  initialState: {
    products: [
      {
        id: 1,
        name: 'Chappathi',
        description: '',
        imageUrl: 'https://img.freepik.com/free-photo/front-view-tasty-lavash-dough-bread-like-wooden-desk-breafd-doough-food-meal_140725-20896.jpg?w=1800&t=st=1695284278~exp=1695284878~hmac=05f0fcd11a15bdbc22fd55e33195bd2ddd64f28d99fcd2044d1446a8ff5354dc',
      },
      {
        id: 2,
        name: "Briyani",
        description: '',
        imageUrl: 'https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?t=st=1695282010~exp=1695285610~hmac=a2df13888b5fe160d9d39a54b4deb8e462d2931ab7f77a8d869403ea433b730d&w=2000',
      },
      {
        id: 3,
        name: "parotta",
        description: '',
        imageUrl: 'https://img.freepik.com/free-photo/close-up-tasty-white-pita-bread_23-2148294995.jpg?w=1800&t=st=1695284442~exp=1695285042~hmac=534155a2b97e2f8c75612bea12d3b9a72639794db7885829720efb60dd293710',
      },
      {
        id: 4,
        name: "Briyani",
        description: '',
        imageUrl: 'https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?t=st=1695282010~exp=1695285610~hmac=a2df13888b5fe160d9d39a54b4deb8e462d2931ab7f77a8d869403ea433b730d&w=2000'},
      {
        id: 5,
        name: "Parotta",
        description: '',
        imageUrl: 'https://img.freepik.com/free-photo/close-up-tasty-white-pita-bread_23-2148294995.jpg?w=1800&t=st=1695284442~exp=1695285042~hmac=534155a2b97e2f8c75612bea12d3b9a72639794db7885829720efb60dd293710',
      },
      {
        id: 6,
        name: "Briyani",
        description: '',
        imageUrl: 'https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?t=st=1695282010~exp=1695285610~hmac=a2df13888b5fe160d9d39a54b4deb8e462d2931ab7f77a8d869403ea433b730d&w=2000',
      },
    ],
  },
  reducers: {},
});

export default featuredProductsSlice.reducer;