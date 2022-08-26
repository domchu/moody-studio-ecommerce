import Images from "../components/constants/images";

const data = [
  {
    id: 1,
    imgSrc: Images.flag,
    name: "Linen Beach Tower",
    ratingAvg: 4.5,
    price: 40,
  },
  {
    id: 2,
    imgSrc: Images.plateBox,
    name: "Square Clear Glass Box",
    ratingAvg: 4.0,
    price: 35,
  },
  {
    id: 3,
    imgSrc: Images.roundPlate,
    name: "4-Pack Small Ceramics Plates",
    ratingAvg: 4.0,
    price: 45,
  },
  {
    id: 4,
    imgSrc: Images.plateRack,
    name: "Round Jute Placemat",
    ratingAvg: 4.0,
    price: 40,
  },
  {
    id: 5,
    imgSrc: Images.plate,
    name: "Metal Wire Basket",
    ratingAvg: 4.0,
    price: 45,
  },
  {
    id: 6,
    imgSrc: Images.ironBasket,
    name: "Metal Wire Basket",
    ratingAvg: 4.0,
    price: 45,
  },
];

export const getAllProducts = () => {
  return data;
};

// export const getAllProducts = async () => {
//     const res = await fetch('https://my-app-fake/products')
//     const data = await res.json();

//     return data
// }

const rateProducts = [
  {
    id: 1,
    imgSrc: Images.wC,
    name: "Tray With Foot",
    ratingAvg: 4.5,
    price: "$30",
  },
  {
    id: 2,
    imgSrc: Images.pillowCase,
    name: "Twill Seat Cashion",
    ratingAvg: 4.5,
    price: "$35",
  },
  {
    id: 3,
    imgSrc: Images.glassCup,
    name: "Fluted Beverages Glass",
    ratingAvg: 4.5,
    price: " $45",
  },
  {
    id: 4,
    imgSrc: Images.vas,
    name: "Ceramic Egg Cup",
    ratingAvg: 4.5,
    price: "$20",
  },
  {
    id: 5,
    imgSrc: Images.cooler,
    name: "Small Bamboo Box",
    ratingAvg: 4.5,
    price: "$38",
  },
  {
    id: 6,
    imgSrc: Images.basket,
    name: "Metal Cutlery Basket ",
    ratingAvg: 4.5,
    price: "$38",
  },
  {
    id: 7,
    imgSrc: Images.cup,
    name: "4-Packs Ceramic Cups",
    ratingAvg: 4.5,
    price: "$42",
  },
  {
    id: 8,
    imgSrc: Images.tower,
    name: "2-Pack Linen Napkins",
    ratingAvg: 4.5,
    price: "$30",
  },
  {
    id: 9,
    imgSrc: Images.plate2,
    name: "Glazed Stoneware Plate",
    ratingAvg: 4.5,
    price: "$39",
  },
];
export const getAllRateProducts = () => {
  return rateProducts;
};
