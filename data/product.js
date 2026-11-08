class Coffee{
  id;
  name;
  price;
  rating;
  count;
  img;

  constructor(coffeeDetail){
    this.id = coffeeDetail.id;
    this.name = coffeeDetail.name;
    this.price = coffeeDetail.price;
    this.rating = coffeeDetail.rating;
    this.count = coffeeDetail.count;
    this.img = coffeeDetail.img;
  }
}
export const coffees = [
  { id: '1',  name: "Classic Espresso",        price: 150, rating: 50, count: 128, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTbofgg06NzQ_-yqXxj-f-EV0DPV9PmWL-dK83RUlOtw&s=10' },
  { id: '2',  name: "Caramel Macchiato",       price: 220, rating: 45, count: 214, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfXgscfmAgVZdy6_OveIpriTuCUZfCEEs0CaKy5Ixl4Q&s=10' },
  { id: '3',  name: "Cold Brew",               price: 200, rating: 40, count: 97 , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZsc3fw7tUC1W39-JAU_y4MG_Ldb_d7FFp97cECeRZig&s=10' },
  { id: '4',  name: "Hazelnut Latte",          price: 210, rating: 45, count: 85 , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8U6Yod93_wQT1DPbAiQQutZsFmQMCMvzD_MzSRIUoDg&s=10' },
  { id: '5',  name: "Mocha Delight",           price: 230, rating: 40, count: 256, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_4n7ppmbCtk-e7leRgpDUPnXLlN3aUZFkP-he_mtzw&s=10' },
  { id: '6',  name: "Flat White",              price: 190, rating: 45, count: 76 , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToMds1lhZZD0Lk7MZ-Tki5wEwy_vxxh24WYrgYQ--khg&s=10' },
  { id: '7',  name: "Cappuccino",              price: 180, rating: 50, count: 189, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwFJxoG4xATI9dZKguBAl_LbsmREXYKpdAtg0OjQxcFw&s=10' },
  { id: '8',  name: "Americano",               price: 140, rating: 35, count: 64 , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlc6pbJPP0OxAk4P37ZSs5TvsCSyPIaaxCT2I6aBgoYA&s=10' },
  { id: '9',  name: "Vanilla Latte",           price: 210, rating: 25, count: 143, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfiGCYepeMnmmZxBqLxbhSlWjNKjcmd5XdDpLQEjUPwQ&s=10' },
  { id: '10', name: "Iced Latte",              price: 200, rating: 45, count: 102, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Cbbf3sqB-r9LxdtlXCE3_U4VYaunz5oxVQgf1AT73A&s=10' },
  { id: '11', name: "Irish Coffee",            price: 250, rating: 35, count: 41 , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4J6MAQ0_puuIFbzPB_Cx-W7XM-zilVO1ES7N8QqLsQ&s=10' },
  { id: '12', name: "Affogato",                price: 240, rating: 45, count: 167, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsekhJCAaapvhK1-ZFwz96XmOebv5J1gNGDGo4et2_AA&s=10' },
  { id: '13', name: "Cortado",                 price: 170, rating: 15, count: 58 , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmlLFR1tau6_HeQT2EaXTTm37LSkXCir6AWGJShblKg&s=10' },
  { id: '14', name: "Salted Caramel Cold Brew",price: 230, rating: 45, count: 132, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNisUcfeTZ9KsryhmI9prArCWFtniHUoab9JWC-UCnfw&s=10' },
  { id: '15', name: "Pumpkin Spice Latte",     price: 220, rating: 50, count: 49 , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRydzCHW6V9K1b31gSBdMJOvRTOePd9CIZbuLIwW3w5g&s=10' },
  { id: '16', name: "Turkish Coffee",          price: 160, rating: 35, count: 33 , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4XxSgcNFaNDHQlzfaPBg1FkLXspxDvlGm0J1fAHPx4Q&s=10' }
].map(coffee => {
  return new Coffee(coffee);
});