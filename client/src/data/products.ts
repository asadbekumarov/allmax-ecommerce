import { ProductType } from "@/types";

export const FIX_PRICE_OPTIONS = [
  { label: "Barchasi", value: "all" },
  { label: "49 000 so'm", value: "49000", price: 49000 },
  { label: "99 000 so'm", value: "99000", price: 99000 },
  { label: "149 000 so'm", value: "149000", price: 149000 },
  { label: "199 000 so'm", value: "199000", price: 199000 },
];

export const products: ProductType[] = [
  {
    id: 1,
    name: "ALLMAX Classic Polo Futbolka",
    shortDescription: "Erkaklar uchun premium paxtali qulay va zamonaviy polo futbolka.",
    description: "ALLMAX Fix Price do'konining eng xaridorgir erkaklar polosi. 100% tabiiy paxtadan tayyorlangan bo'lib, yoz va bahor faslida kundalik kiyish uchun juda qulay.",
    price: 99000,
    category: "t-shirts",
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    stock: {
      s: 5,
      m: 12,
      l: 0, // Omborda tugagan namuna
      xl: 3,
      xxl: 0, // Omborda tugagan namuna
    },
    images: {
      gray: "/products/1g.png",
      purple: "/products/1p.png",
      green: "/products/1gr.png",
    },
  },
  {
    id: 2,
    name: "ALLMAX Qishki Issiq Tolovka",
    shortDescription: "Ichki qismi junli, sovuq kunlar uchun mo'ljallangan qulay tolovka.",
    description: "ALLMAX qishki kolleksiyasidan issiq va yumshoq tolovka. Shamoldan himoya qiladi va qulay zamokli cho'ntaklarga ega.",
    price: 149000,
    category: "jackets",
    sizes: ["s", "m", "l", "xl"],
    colors: ["gray", "green"],
    stock: {
      s: 2,
      m: 0, // Omborda tugagan
      l: 7,
      xl: 4,
    },
    images: {
      gray: "/products/2g.png",
      green: "/products/2gr.png",
    },
  },
  {
    id: 3,
    name: "ALLMAX Sportiv Hudi Pullover",
    shortDescription: "Erkaklar sportiv uslubidagi kapyushonli hudi.",
    description: "Sport va shahar hayoti uchun mukammal uslubdagi kapyushonli hudi. Yuqori sifatli matodan tikilgan, rangi o'chmaydi.",
    price: 149000,
    category: "jackets",
    sizes: ["s", "m", "l"],
    colors: ["green", "blue", "black"],
    stock: {
      s: 4,
      m: 6,
      l: 0,
    },
    images: {
      green: "/products/3gr.png",
      blue: "/products/3b.png",
      black: "/products/3bl.png",
    },
  },
  {
    id: 4,
    name: "ALLMAX Nafas Oluvchi Futbolka",
    shortDescription: "Kundalik sport va uy uchun yengil erkaklar futbolkasi.",
    description: "Maxsus havo o'tkazuvchi matodan tikilgan erkaklar futbolkasi. ALLMAX 49 000 so'm polkasidan o'rin olgan hamyonbop variant.",
    price: 49000,
    category: "t-shirts",
    sizes: ["s", "m", "l"],
    colors: ["white", "pink"],
    stock: {
      s: 15,
      m: 8,
      l: 10,
    },
    images: {
      white: "/products/4w.png",
      pink: "/products/4p.png",
    },
  },
  {
    id: 5,
    name: "ALLMAX Fleece Issiq Jemper",
    shortDescription: "Sovuq ob-havo uchun shamolga chidamli jinsiy jemper.",
    description: "Haroratni ushlab turuvchi flis qatlamli jemper. ALLMAX Fix Price 99 000 so'mlik doimiy aksiyadagi tovar.",
    price: 99000,
    category: "jackets",
    sizes: ["s", "m", "l"],
    colors: ["red", "orange", "black"],
    stock: {
      s: 0,
      m: 5,
      l: 3,
    },
    images: {
      red: "/products/5r.png",
      orange: "/products/5o.png",
      black: "/products/5bl.png",
    },
  },
  {
    id: 6,
    name: "ALLMAX Yugurish Krossovkasi",
    shortDescription: "Ergonomik taglikli qulay erkaklar yugurish krossovkasi.",
    description: "Oyoqni charchatmaydigan yengil krossovka. ALLMAX oyoq kiyimlari qatoridagi eng ommabop model.",
    price: 199000,
    category: "shoes",
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["gray", "white"],
    stock: {
      "40": 4,
      "41": 0,
      "42": 8,
      "43": 2,
      "44": 0,
    },
    images: {
      gray: "/products/6g.png",
      white: "/products/6w.png",
    },
  },
  {
    id: 7,
    name: "ALLMAX Urban Sport Sneaker",
    shortDescription: "Shaharcha uslubdagi kundalik charm va to'rli krossovka.",
    description: "Har qanday kiyim bilan mos tushadigan ko'p qirrali zamonaviy sport krossovkasi.",
    price: 199000,
    category: "shoes",
    sizes: ["40", "41", "42", "43"],
    colors: ["gray", "pink"],
    stock: {
      "40": 3,
      "41": 6,
      "42": 0,
      "43": 1,
    },
    images: {
      gray: "/products/7g.png",
      pink: "/products/7p.png",
    },
  },
  {
    id: 8,
    name: "ALLMAX Klassik Moviy Jinsi Shim",
    shortDescription: "Erkaklar uchun qalin denim matosidan klassik jinsi shim.",
    description: "Chidamli denim matodan tikilgan, qulay fasonli ALLMAX jinsi shimi. Ofis va kundalik uchrashuvlar uchun ayni muddao.",
    price: 149000,
    category: "pants",
    sizes: ["s", "m", "l", "xl"],
    colors: ["blue", "green"],
    stock: {
      s: 6,
      m: 0,
      l: 4,
      xl: 2,
    },
    images: {
      blue: "/products/8b.png",
      green: "/products/8gr.png",
    },
  },
];
