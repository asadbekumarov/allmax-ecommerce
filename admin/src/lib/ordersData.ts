export type OrderStatus = "Tayyorlanmoqda" | "Yo'lda" | "Yetkazildi";
export type PaymentMethod = "Click" | "Payme" | "Naqd";
export type PaymentStatus = "To'langan" | "Kutilmoqda";

export interface OrderItem {
  id: string | number;
  productName: string;
  size: "S" | "M" | "L" | "XL" | "XXL" | "3XL";
  color: string;
  quantity: number;
  price: number; // 49000, 99000, 149000, 199000
  image: string;
}

export interface Order {
  id: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  region: string;
  address: string;
  notes?: string;
  items: OrderItem[];
  totalPrice: number;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  orderStatus: OrderStatus;
  createdAt: string;
}

export const UZBEKISTAN_REGIONS = [
  "Toshkent shahri",
  "Toshkent viloyati",
  "Samarqand",
  "Fargʻona",
  "Andijon",
  "Namangan",
  "Buxoro",
  "Xorazm",
  "Qashqadaryo",
  "Surxondaryo",
  "Jizzax",
  "Navoiy",
  "Sirdaryo",
  "Qoraqalpogʻiston",
] as const;

export const FIX_PRICE_SHELVES = [
  {
    value: 49000,
    label: "49 000 so'm",
    shortLabel: "49k so'm",
    tag: "Hamyonbop polka",
    color: "from-blue-500 to-cyan-500",
  },
  {
    value: 99000,
    label: "99 000 so'm",
    shortLabel: "99k so'm",
    tag: "Standart polka",
    color: "from-emerald-500 to-teal-500",
  },
  {
    value: 149000,
    label: "149 000 so'm",
    shortLabel: "149k so'm",
    tag: "Premium polka",
    color: "from-amber-500 to-orange-500",
  },
  {
    value: 199000,
    label: "199 000 so'm",
    shortLabel: "199k so'm",
    tag: "Eksklyuziv polka",
    color: "from-violet-500 to-purple-600",
  },
] as const;

export const INITIAL_ORDERS: Order[] = [
  {
    id: "ALX-9142",
    customerName: "Sardor Rahimov",
    customerPhone: "+998 90 123 45 67",
    customerEmail: "sardor.r@gmail.com",
    region: "Toshkent shahri",
    address: "Chilonzor tumani, 9-mavze, 24-uy, 15-xonadon",
    notes: "Iltimos, soat 17:00 dan keyin yetkazib bering",
    items: [
      {
        id: 1,
        productName: "ALLMAX Classic Polo Futbolka",
        size: "L",
        color: "green",
        quantity: 1,
        price: 99000,
        image: "/products/1gr.png",
      },
    ],
    totalPrice: 99000,
    paymentMethod: "Click",
    paymentStatus: "To'langan",
    orderStatus: "Tayyorlanmoqda",
    createdAt: "15 Sentabr, 2026 09:40",
  },
  {
    id: "ALX-9141",
    customerName: "Jasur Bekmurodov",
    customerPhone: "+998 93 456 78 90",
    customerEmail: "jasurbek@mail.ru",
    region: "Samarqand",
    address: "Samarqand shahri, Registon ko'chasi 55",
    items: [
      {
        id: 2,
        productName: "ALLMAX Qishki Issiq Tolovka",
        size: "XL",
        color: "gray",
        quantity: 1,
        price: 149000,
        image: "/products/2g.png",
      },
    ],
    totalPrice: 149000,
    paymentMethod: "Payme",
    paymentStatus: "To'langan",
    orderStatus: "Yo'lda",
    createdAt: "15 Sentabr, 2026 08:15",
  },
  {
    id: "ALX-9140",
    customerName: "Madina Karimova",
    customerPhone: "+998 97 888 12 34",
    customerEmail: "madina.k@inbox.uz",
    region: "Andijon",
    address: "Andijon shahri, Bobur shoh ko'chasi 112",
    items: [
      {
        id: 4,
        productName: "ALLMAX Yozgi Paxtali Mayka",
        size: "M",
        color: "pink",
        quantity: 2,
        price: 49000,
        image: "/products/4p.png",
      },
    ],
    totalPrice: 98000,
    paymentMethod: "Naqd",
    paymentStatus: "Kutilmoqda",
    orderStatus: "Tayyorlanmoqda",
    createdAt: "14 Sentabr, 2026 21:05",
  },
  {
    id: "ALX-9139",
    customerName: "Otabek Qodirov",
    customerPhone: "+998 94 333 44 55",
    customerEmail: "otabek.q@gmail.com",
    region: "Fargʻona",
    address: "Qo'qon shahri, Istiqlol ko'chasi 42",
    items: [
      {
        id: 3,
        productName: "ALLMAX Sportiv Hudi Pullover",
        size: "XXL",
        color: "black",
        quantity: 1,
        price: 149000,
        image: "/products/3bl.png",
      },
      {
        id: 1,
        productName: "ALLMAX Classic Polo Futbolka",
        size: "XXL",
        color: "gray",
        quantity: 1,
        price: 99000,
        image: "/products/1g.png",
      },
    ],
    totalPrice: 248000,
    paymentMethod: "Click",
    paymentStatus: "To'langan",
    orderStatus: "Yetkazildi",
    createdAt: "14 Sentabr, 2026 16:30",
  },
  {
    id: "ALX-9138",
    customerName: "Zilola Mirzayeva",
    customerPhone: "+998 91 777 99 00",
    customerEmail: "zilola.m@gmail.com",
    region: "Buxoro",
    address: "Buxoro shahri, Naqshbandiy ko'chasi 18",
    items: [
      {
        id: 5,
        productName: "ALLMAX Demisezon Kurtka",
        size: "S",
        color: "red",
        quantity: 1,
        price: 199000,
        image: "/products/5r.png",
      },
    ],
    totalPrice: 199000,
    paymentMethod: "Payme",
    paymentStatus: "To'langan",
    orderStatus: "Yetkazildi",
    createdAt: "14 Sentabr, 2026 14:10",
  },
  {
    id: "ALX-9137",
    customerName: "Bobur Aliyev",
    customerPhone: "+998 99 654 32 10",
    customerEmail: "bobur.a@yahoo.com",
    region: "Namangan",
    address: "Namangan shahri, Uychi ko'chasi 7-uy",
    items: [
      {
        id: 1,
        productName: "ALLMAX Classic Polo Futbolka",
        size: "M",
        color: "purple",
        quantity: 1,
        price: 99000,
        image: "/products/1p.png",
      },
    ],
    totalPrice: 99000,
    paymentMethod: "Naqd",
    paymentStatus: "Kutilmoqda",
    orderStatus: "Yo'lda",
    createdAt: "14 Sentabr, 2026 11:25",
  },
  {
    id: "ALX-9136",
    customerName: "Dilshod Tursunov",
    customerPhone: "+998 90 555 67 89",
    customerEmail: "dilshod.t@gmail.com",
    region: "Toshkent viloyati",
    address: "Chirchiq shahri, Navoiy shoh ko'chasi 33",
    items: [
      {
        id: 3,
        productName: "ALLMAX Sportiv Hudi Pullover",
        size: "3XL",
        color: "blue",
        quantity: 1,
        price: 149000,
        image: "/products/3b.png",
      },
    ],
    totalPrice: 149000,
    paymentMethod: "Click",
    paymentStatus: "To'langan",
    orderStatus: "Tayyorlanmoqda",
    createdAt: "14 Sentabr, 2026 09:10",
  },
  {
    id: "ALX-9135",
    customerName: "Anvar Saidov",
    customerPhone: "+998 93 111 22 33",
    customerEmail: "anvar.s@mail.uz",
    region: "Xorazm",
    address: "Urganch shahri, Al-Xorazmiy ko'chasi 88",
    items: [
      {
        id: 5,
        productName: "ALLMAX Demisezon Kurtka",
        size: "L",
        color: "black",
        quantity: 1,
        price: 199000,
        image: "/products/5bl.png",
      },
    ],
    totalPrice: 199000,
    paymentMethod: "Payme",
    paymentStatus: "To'langan",
    orderStatus: "Yetkazildi",
    createdAt: "13 Sentabr, 2026 19:45",
  },
  {
    id: "ALX-9134",
    customerName: "Gulnora Nazarova",
    customerPhone: "+998 97 444 55 66",
    customerEmail: "gulnora.n@gmail.com",
    region: "Qashqadaryo",
    address: "Qarshi shahri, Mustaqillik shoh ko'chasi 14",
    items: [
      {
        id: 4,
        productName: "ALLMAX Yozgi Paxtali Mayka",
        size: "S",
        color: "white",
        quantity: 1,
        price: 49000,
        image: "/products/4w.png",
      },
    ],
    totalPrice: 49000,
    paymentMethod: "Naqd",
    paymentStatus: "Kutilmoqda",
    orderStatus: "Yo'lda",
    createdAt: "13 Sentabr, 2026 15:20",
  },
];
