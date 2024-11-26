import images from "./images";
export const courses = [
  {
    name: "Sembawang Country Club",
    price: "SGD152 (THB4,025)",
    discount: "Save 10%",
    img: images.facility1,
    details: {
      yards: 6337,
      type: "Parkland",
    },
    rating: 4.4,
    rating_out_of: 5,
    recommended: true,
    actions: {
      book: true,
      view_on_map: true,
    },
  },
  {
    name: "Sentosa Golf Club New Tanjong Course",
    price: "SGD499 (THB13,214)",
    img: images.facility2,
    details: {
      yards: 6800,
      type: "Parkland",
      designer: "Andrew Johnston",
    },
    rating: 4.1,
    rating_out_of: 5,
    recommended: true,
    actions: {
      book: true,
      view_on_map: true,
    },
  },
  {
    name: "Sentosa Golf Club Serapong Course",
    price: "SGD499 (THB13,214)",
    img: images.facility3,
    details: {
      yards: 7101,
      type: "Parkland",
      designer: "Ronald Fream",
    },
    rating: 5.0,
    rating_out_of: 5,
    recommended: true,
    actions: {
      book: true,
      view_on_map: true,
    },
  },
  {
    name: "Champions Golf Course",
    price: "Price on application",
    img: images.facility4,
    details: {
      yards: 2271,
      type: "Parkland",
      designer: "Alan Murray & Alvin Liau",
    },
    rating: 4.2,
    rating_out_of: 5,
    status: "Permanently Closed",
    actions: {
      book: false,
      view_on_map: true,
    },
  },
  {
    name: "Laguna National Masters Course",
    price: "Price on application",
    img: images.facility4,
    details: {
      yards: 7109,
      type: "Parkland",
      designer: "Andy Dye",
    },
    rating: 4.0,
    rating_out_of: 5,
    actions: {
      book: false,
      view_on_map: true,
    },
  },
  {
    name: "Laguna National World Classic",
    price: "Price on application",
    img: images.facility4,
    details: {
      yards: 7156,
      type: "Parkland",
      designer: "Pete Dye",
    },
    rating: 5.0,
    rating_out_of: 5,
    actions: {
      book: false,
      view_on_map: true,
    },
  },
];
