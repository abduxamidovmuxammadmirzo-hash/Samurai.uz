"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import blackTea from "@/img/drinks/tea/black_tea.png";
import greenTea from "@/img/drinks/tea/green_tea.png";
import kiwiLemonade from "@/img/drinks/kiwi_lemonade.png";
import limeLemonade from "@/img/drinks/lime_lemonade.png";
import passionFruit from "@/img/drinks/passion_fruit.png";
import beijingStyleEggplant from "@/img/meals/salad/Beijing_style_Eggplant.png";
import greekSaladMeal from "@/img/meals/salad/Greek_salad.png";
import nonCrispyEggplant from "@/img/meals/salad/Non_crispy_eggplant.png";
import prawnAndRocketSalad from "@/img/meals/salad/Prawn_and_Rocket_Salad.png";
import shrimpCaesar from "@/img/meals/salad/Shrimp_Caesar.png";
import shrimpChicken from "@/img/meals/salad/Shrimp_Chicken.png";
import shrimpPassionFruitSauce from "@/img/meals/salad/Shrimp_with_Passion_Fruit_Sauce.png";
import vitaminSalad from "@/img/meals/salad/Vitamin_Salad.png";

export type Language = "ru" | "uzLat" | "uzCy";

const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN ?? "";
const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID ?? "";
const TELEGRAM_BOT_USERNAME = process.env.NEXT_PUBLIC_TELEGRAM_BOT_USERNAME ?? "";

type OrderFormState = {
  name: string;
  phone: string;
  address: string;
  quantity: string;
  comment: string;
};

type Dish = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
};

type Subcategory = {
  id: string;
  name: string;
  image: string;
  dishes: Dish[];
};

type MenuCategory = {
  id: string;
  name: string;
  image: string;
  subtitle: string;
  dishes?: Dish[];
  subcategories?: Subcategory[];
};

const saladDishes: Dish[] = [
  {
    id: "salad1",
    name: "Beijing Style Eggplant",
    description: "Сочный баклажан с лёгкой азиатской заправкой и яркими травами.",
    price: "340 ₽",
    image: beijingStyleEggplant.src,
  },
  {
    id: "salad2",
    name: "Greek Salad",
    description: "Свежие овощи, сыр, маслины и ароматное оливковое масло.",
    price: "390 ₽",
    image: greekSaladMeal.src,
  },
  {
    id: "salad3",
    name: "Non Crispy Eggplant",
    description: "Мягкий баклажан с выразительным вкусом и нежной текстурой.",
    price: "360 ₽",
    image: nonCrispyEggplant.src,
  },
  {
    id: "salad4",
    name: "Prawn and Rocket Salad",
    description: "Креветки, руккола и свежие овощи в лёгком фирменном соусе.",
    price: "430 ₽",
    image: prawnAndRocketSalad.src,
  },
  {
    id: "salad5",
    name: "Shrimp Caesar",
    description: "Салат с креветками, листьями салата, сыром и классическим соусом.",
    price: "450 ₽",
    image: shrimpCaesar.src,
  },
  {
    id: "salad6",
    name: "Shrimp Chicken",
    description: "Комбинация курицы и креветок с освежающей овощной основой.",
    price: "470 ₽",
    image: shrimpChicken.src,
  },
  {
    id: "salad7",
    name: "Shrimp with Passion Fruit Sauce",
    description: "Креветки в ярком соусе маракуйи с лёгкой кислинкой и свежестью.",
    price: "490 ₽",
    image: shrimpPassionFruitSauce.src,
  },
  {
    id: "salad8",
    name: "Vitamin Salad",
    description: "Витаминный микс свежих овощей и зелени для лёгкого питания.",
    price: "320 ₽",
    image: vitaminSalad.src,
  },
];

const menu: MenuCategory[] = [
  {
    id: "bar",
    name: "Бар",
    subtitle: "Напитки",
    image: blackTea.src,
    subcategories: [
      {
        id: "tea",
        name: "Чай",
        image: blackTea.src,
        dishes: [
          {
            id: "tea1",
            name: "Чёрный чай",
            description: "Классический ароматный чай с мягким вкусом.",
            price: "180 ₽",
            image: blackTea.src,
          },
          {
            id: "tea2",
            name: "Зелёный чай",
            description: "Лёгкий и освежающий напиток для любого времени дня.",
            price: "200 ₽",
            image: greenTea.src,
          },
          {
            id: "tea3",
            name: "Чай с мятой",
            description: "Нежный травяной вкус с яркой свежестью мяты.",
            price: "220 ₽",
            image: blackTea.src,
          },
        ],
      },
      {
        id: "lemonade",
        name: "Лимонады",
        image: limeLemonade.src,
        dishes: [
          {
            id: "lemon1",
            name: "Лимонад классический",
            description: "Освежающий напиток с яркой цитрусовой кислинкой.",
            price: "260 ₽",
            image: limeLemonade.src,
          },
          {
            id: "lemon2",
            name: "Лимонад апельсиновый",
            description: "Сладкий цитрусовый баланс и лёгкая кислинка.",
            price: "280 ₽",
            image: passionFruit.src,
          },
          {
            id: "lemon3",
            name: "Лимонад клубничный",
            description: "Нежный ягодный вкус с идеальной сладостью.",
            price: "290 ₽",
            image: kiwiLemonade.src,
          },
        ],
      },
    ],
  },
  {
    id: "salads",
    name: "Салаты",
    subtitle: "Свежие блюда",
    image: saladDishes[0].image,
    dishes: saladDishes,
  },
  {
    id: "garnishes",
    name: "Гарниры",
    subtitle: "К гарниру",
    image:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80",
    dishes: [
      {
        id: "garnish1",
        name: "Рис",
        description: "Ароматный рис, идеально подходит к основным блюдам.",
        price: "180 ₽",
        image:
          "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "garnish2",
        name: "Картофель фри",
        description: "Хрустящий и золотистый картофель с солью.",
        price: "220 ₽",
        image:
          "https://images.unsplash.com/photo-1576106674-63460e3f518f?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "garnish3",
        name: "Картофельное пюре",
        description: "Нежное пюре с маслом и сливками.",
        price: "210 ₽",
        image:
          "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "pizza",
    name: "Пицца",
    subtitle: "Итальянская классика",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80",
    dishes: [
      {
        id: "pizza1",
        name: "Маргарита",
        description: "Томатный соус, моцарелла и свежий базилик.",
        price: "540 ₽",
        image:
          "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "pizza2",
        name: "Пепперони",
        description: "Острые колбаски пепперони и сыр.",
        price: "620 ₽",
        image:
          "https://images.unsplash.com/photo-1552539618-7eec9b4d1796?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "pizza3",
        name: "Четыре сыра",
        description: "Комбинация сыров с сливочной текстурой.",
        price: "610 ₽",
        image:
          "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "soups",
    name: "Супы",
    subtitle: "Тёплые и насыщенные",
    image:
      "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
    dishes: [
      {
        id: "soup1",
        name: "Грибной суп",
        description: "Нежный сливочный суп с лесными грибами.",
        price: "360 ₽",
        image:
          "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "soup2",
        name: "Том Ям",
        description: "Острый тайский суп с креветками и овощами.",
        price: "430 ₽",
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "soup3",
        name: "Уха",
        description: "Плотный рыбный бульон с картофелем и зеленью.",
        price: "390 ₽",
        image:
          "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "hot-dishes",
    name: "Горячие блюда",
    subtitle: "Главные блюда",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80",
    dishes: [
      {
        id: "hot1",
        name: "Бефстроганов",
        description: "Нежная говядина в сливочно-грибном соусе.",
        price: "680 ₽",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "hot2",
        name: "Курица в соусе",
        description: "Сочное куриное филе с пикантным соусом.",
        price: "540 ₽",
        image:
          "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "hot3",
        name: "Стейк",
        description: "Говяжья котлета с жареным картофелем и зеленью.",
        price: "760 ₽",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "wok",
    name: "Вок",
    subtitle: "Азиатская кухня",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80",
    dishes: [
      {
        id: "wok1",
        name: "Вок с курицей",
        description: "Курица, овощи и соус wok в сковороде.",
        price: "520 ₽",
        image:
          "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "wok2",
        name: "Вок с креветками",
        description: "Морепродукты, овощи и пикантный соус.",
        price: "610 ₽",
        image:
          "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "wok3",
        name: "Вок с овощами",
        description: "Сочная смесь овощей с ароматным соусом.",
        price: "470 ₽",
        image:
          "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "rolls",
    name: "Роллы",
    subtitle: "Классические роллы",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
    dishes: [
      {
        id: "roll1",
        name: "Классический ролл",
        description: "С лососем, огурцом и авокадо.",
        price: "430 ₽",
        image:
          "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "roll2",
        name: "Филадельфия",
        description: "Лосось, сливочный сыр и рис.",
        price: "460 ₽",
        image:
          "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "roll3",
        name: "Калифорния",
        description: "Краб, авокадо, огурец и соус.",
        price: "450 ₽",
        image:
          "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "hot-rolls",
    name: "Горячие роллы",
    subtitle: "Тёплые роллы",
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1200&q=80",
    dishes: [
      {
        id: "hot-roll1",
        name: "Горячий с лососем",
        description: "Запечённый ролл с нежным лососем.",
        price: "520 ₽",
        image:
          "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "hot-roll2",
        name: "Горячий с курицей",
        description: "Сочная курица, сыр и сливочный вкус.",
        price: "490 ₽",
        image:
          "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "hot-roll3",
        name: "Горячий с угрём",
        description: "Пикантный ролл с копчёным угрём.",
        price: "560 ₽",
        image:
          "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    id: "baked-rolls",
    name: "Запечённые роллы",
    subtitle: "Под сырной корочкой",
    image:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=1200&q=80",
    dishes: [
      {
        id: "baked1",
        name: "Запечённый с креветкой",
        description: "Нежная креветка под сыром и соусом.",
        price: "540 ₽",
        image:
          "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "baked2",
        name: "Запечённый с лососем",
        description: "Ролл с лососем и сырной начинкой.",
        price: "580 ₽",
        image:
          "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=900&q=80",
      },
      {
        id: "baked3",
        name: "Запечённый с овощами",
        description: "Лёгкий ролл с яркими овощами и сыром.",
        price: "500 ₽",
        image:
          "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
];

const translations: Record<Language, Record<string, string>> = {
  ru: {
    category: "Категория",
    subcategory: "Подкатегории",
    positions: "позиций",
    order: "Заказать",
    checkout: "Оформление заказа",
    name: "Ваше имя",
    phone: "Телефон",
    address: "Адрес",
    quantity: "Количество",
    total: "Итого",
    comment: "Комментарий",
    cancel: "Отмена",
    send: "Отправить заказ",
    placeholderName: "Иван",
    placeholderPhone: "+7 999 123 45 67",
    placeholderAddress: "г. Москва, ул. Ленина, 12, кв. 5",
    placeholderComment: "Пожелания к заказу",
    alertRequired: "Пожалуйста, заполните имя, телефон и адрес.",
    alertTelegram: "Для отправки в Telegram задайте NEXT_PUBLIC_TELEGRAM_BOT_TOKEN и NEXT_PUBLIC_TELEGRAM_CHAT_ID",
    success: "Заказ отправлен в Telegram!",
    error: "Не удалось отправить заказ в Telegram. Проверьте настройки бота.",
    defaultTitle: "Заказ",
    cart: "Корзина",
    cartEmpty: "Корзина пуста",
    addToCart: "В корзину",
    clear: "Очистить",
    continue: "Продолжить",
    totalLabel: "Итог",
    itemCount: "товар",
    orderButton: "Оформить заказ",
    formTitle: "Данные клиента",
  },
  uzLat: {
    category: "Katalog",
    subcategory: "Pastki toifalar",
    positions: "pozitsiya",
    order: "Buyurtma qiling",
    checkout: "Buyurtma berish",
    name: "Ismingiz",
    phone: "Telefon",
    address: "Manzil",
    quantity: "Miqdor",
    total: "Jami",
    comment: "Izoh",
    cancel: "Bekor qilish",
    send: "Buyurtmani yuborish",
    placeholderName: "Akbar",
    placeholderPhone: "+998 99 123 45 67",
    placeholderAddress: "Toshkent, Chilonzor ko'chasi, 12-uy",
    placeholderComment: "Buyurtma bo'yicha fikrlar",
    alertRequired: "Iltimos, ism, telefon va manzilni to'ldiring.",
    alertTelegram: "Telegramga yuborish uchun NEXT_PUBLIC_TELEGRAM_BOT_TOKEN va NEXT_PUBLIC_TELEGRAM_CHAT_ID ni sozlang",
    success: "Buyurtma Telegramga yuborildi!",
    error: "Buyurtma Telegramga yuborilmadi. Bot sozlamalarini tekshiring.",
    defaultTitle: "Buyurtma",
    cart: "Savat",
    cartEmpty: "Savatingiz bo'sh",
    addToCart: "Savatga qo'shish",
    clear: "Tozalash",
    continue: "Davom etish",
    totalLabel: "Umumiy summa",
    itemCount: "ta mahsulot",
    orderButton: "Buyurtma berish",
    formTitle: "Mijoz ma'lumotlari",
  },
  uzCy: {
    category: "Каталог",
    subcategory: "Пастки тоифалар",
    positions: "позициялар",
    order: "Буюртма қилинг",
    checkout: "Буюртма бериш",
    name: "Исмингиз",
    phone: "Телефон",
    address: "Манзил",
    quantity: "Миқдор",
    total: "Жами",
    comment: "Изоҳ",
    cancel: "Бекор қилиш",
    send: "Буюртмани юбориш",
    placeholderName: "Акбар",
    placeholderPhone: "+998 99 123 45 67",
    placeholderAddress: "Тошкент, Чилонзор кўчаси, 12-уй",
    placeholderComment: "Буюртма бўйича фикрлар",
    alertRequired: "Илтимос, исм, телефон ва манзилни тўлдиринг.",
    alertTelegram: "Telegramга юбориш учун NEXT_PUBLIC_TELEGRAM_BOT_TOKEN ва NEXT_PUBLIC_TELEGRAM_CHAT_ID ни созланг",
    success: "Буюртма Telegramга юборилди!",
    error: "Буюртма Telegramга юбормади. Бот созламаларини текширинг.",
    defaultTitle: "Буюртма",
    cart: "Корзина",
    cartEmpty: "Корзина буш",
    addToCart: "Корзинага қўшиш",
    clear: "Тозалаш",
    continue: "Давом эттириш",
    totalLabel: "Умумий сумма",
    itemCount: "товар",
    orderButton: "Оформить заказ",
    formTitle: "Данные клиента",
  },
};

const saladNameLabels: Record<string, Record<Language, string>> = {
  salad1: { ru: "Баклажаны по-пекински", uzLat: "Beijing Style Eggplant", uzCy: "Пекин бакилажанлари" },
  salad2: { ru: "Греческий салат", uzLat: "Greek Salad", uzCy: "Грек салати" },
  salad3: { ru: "Нежные баклажаны", uzLat: "Non Crispy Eggplant", uzCy: "Нозик баклажанлар" },
  salad4: { ru: "Салат с креветками и рукколой", uzLat: "Prawn and Rocket Salad", uzCy: "Креветка ва руккола салати" },
  salad5: { ru: "Креветочный Цезарь", uzLat: "Shrimp Caesar", uzCy: "Креветка Сезар" },
  salad6: { ru: "Курица с креветками", uzLat: "Shrimp Chicken", uzCy: "Креветка курка" },
  salad7: { ru: "Креветки с соусом маракуйи", uzLat: "Shrimp with Passion Fruit Sauce", uzCy: "Маракуя соусли креветка" },
  salad8: { ru: "Витаминный салат", uzLat: "Vitamin Salad", uzCy: "Витамин салати" },
};

const labelForCategory = (categoryId: string, language: Language) => {
  const categoryLabels: Record<string, Record<Language, string>> = {
    bar: { ru: "Бар", uzLat: "Bar", uzCy: "Бар" },
    salads: { ru: "Салаты", uzLat: "Salatlar", uzCy: "Салатлар" },
    garnishes: { ru: "Гарниры", uzLat: "Garnirlar", uzCy: "Гарнирлар" },
    pizza: { ru: "Пицца", uzLat: "Pitsa", uzCy: "Пицца" },
    soups: { ru: "Супы", uzLat: "Sovlar", uzCy: "Совлар" },
    "hot-dishes": { ru: "Горячие блюда", uzLat: "Issiq taomlar", uzCy: "Иссиқ таомлар" },
    wok: { ru: "Вок", uzLat: "Wok", uzCy: "Вок" },
    rolls: { ru: "Роллы", uzLat: "Rollar", uzCy: "Роллар" },
    "hot-rolls": { ru: "Горячие роллы", uzLat: "Issiq rollar", uzCy: "Иссиқ роллар" },
    "baked-rolls": { ru: "Запечённые роллы", uzLat: "Pecheniy rollar", uzCy: "Печений роллар" },
  };

  return categoryLabels[categoryId]?.[language] ?? categoryId;
};

const getLocalizedDishName = (dishId: string, fallback: string, language: Language) => {
  return saladNameLabels[dishId]?.[language] ?? fallback;
};

const formatUzs = (amount: number, language: Language) => {
  if (language === "ru") {
    return `${amount.toLocaleString("ru-RU")} сум`;
  }

  if (language === "uzLat") {
    return `${amount.toLocaleString("uz-UZ")} so'm`;
  }

  return `${amount.toLocaleString("uz-UZ")} сўм`;
};

const formatPrice = (price: string, language: Language) => {
  const digits = Number((price || "0").replace(/[^\d]/g, ""));
  return formatUzs(digits * 1000, language);
};

type CartItem = {
  dish: Dish;
  quantity: number;
};

const Category = ({ language }: { language: Language }) => {
  const [activeCategoryId, setActiveCategoryId] = useState(menu[0].id);
  const [activeSubcategoryId, setActiveSubcategoryId] = useState(menu[0].subcategories?.[0]?.id ?? "");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderForm, setOrderForm] = useState<OrderFormState>({
    name: "",
    phone: "",
    address: "",
    quantity: "1",
    comment: "",
  });

  const activeCategory = useMemo(
    () => menu.find((item) => item.id === activeCategoryId) ?? menu[0],
    [activeCategoryId],
  );

  const activeSubcategory = useMemo(() => {
    if (!activeCategory.subcategories || activeCategory.subcategories.length === 0) {
      return null;
    }

    return (
      activeCategory.subcategories.find((item) => item.id === activeSubcategoryId) ??
      activeCategory.subcategories[0]
    );
  }, [activeCategory, activeSubcategoryId]);

  const displayedDishes = activeSubcategory?.dishes ?? activeCategory.dishes ?? [];
  const isLemonadeImage = (image: string) =>
    [limeLemonade.src, passionFruit.src, kiwiLemonade.src].includes(image);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => {
    const priceValue = Number((item.dish.price || "0").replace(/[^\d]/g, ""));
    return sum + priceValue * 1000 * item.quantity;
  }, 0);

  const addToCart = (dish: Dish) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.dish.id === dish.id);

      if (existing) {
        return prev.map((item) =>
          item.dish.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...prev, { dish, quantity: 1 }];
    });

    setIsCartOpen(true);
  };

  const changeCartQuantity = (dishId: string, delta: number) => {
    setCartItems((prev) =>
      prev.flatMap((item) => {
        if (item.dish.id !== dishId) {
          return [item];
        }

        const nextQuantity = item.quantity + delta;
        return nextQuantity <= 0 ? [] : [{ ...item, quantity: nextQuantity }];
      }),
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setIsCheckoutOpen(false);
  };

  const handleFormChange = (field: keyof OrderFormState, value: string) => {
    setOrderForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleCheckoutSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (cartItems.length === 0) {
      return;
    }

    const { name, phone, address, comment } = orderForm;

    if (!name.trim() || !phone.trim() || !address.trim()) {
      window.alert(translations[language].alertRequired);
      return;
    }

    const lines = [
      "Новый заказ",
      "",
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      `Адрес: ${address}`,
      comment ? `Комментарий: ${comment}` : "",
      "",
      "Товары:",
      ...cartItems.map(
        (item) =>
          `- ${item.dish.name} x${item.quantity} — ${formatPrice(item.dish.price, language)}`,
      ),
      "",
      `Общая сумма: ${formatUzs(cartTotal, language)}`,
    ].filter(Boolean);

    const message = lines.join("\n");

    try {
      if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
        const response = await fetch(
          `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              chat_id: TELEGRAM_CHAT_ID,
              text: message,
            }),
          },
        );

        if (response.ok) {
          clearCart();
          setIsCheckoutOpen(false);
          setOrderForm({
            name: "",
            phone: "",
            address: "",
            quantity: "1",
            comment: "",
          });
          window.alert(translations[language].success);
          return;
        }
      }

      if (TELEGRAM_BOT_USERNAME) {
        const telegramUrl = `https://t.me/${TELEGRAM_BOT_USERNAME}?text=${encodeURIComponent(message)}`;
        clearCart();
        setIsCheckoutOpen(false);
        window.open(telegramUrl, "_blank", "noopener,noreferrer");
        return;
      }

      clearCart();
      setIsCheckoutOpen(false);
      window.alert(translations[language].alertTelegram);
    } catch (error) {
      if (TELEGRAM_BOT_USERNAME) {
        const telegramUrl = `https://t.me/${TELEGRAM_BOT_USERNAME}?text=${encodeURIComponent(message)}`;
        clearCart();
        setIsCheckoutOpen(false);
        window.open(telegramUrl, "_blank", "noopener,noreferrer");
        return;
      }

      console.error("Telegram order submit failed:", error);
      clearCart();
      setIsCheckoutOpen(false);
      window.alert(translations[language].error);
    }
  };

  const handleCategoryClick = (category: MenuCategory) => {
    setActiveCategoryId(category.id);

    if (category.subcategories && category.subcategories.length > 0) {
      setActiveSubcategoryId(category.subcategories[0].id);
    } else {
      setActiveSubcategoryId("");
    }
  };

  return (
    <div className="w-full bg-[#220a0d] py-6 px-4 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex gap-3 overflow-x-auto pb-3">
          {menu.map((category) => {
            const isActive = activeCategoryId === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => handleCategoryClick(category)}
                className={`whitespace-nowrap rounded-full border px-5 py-2 text-sm font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? "border-amber-400 bg-amber-500/20 text-amber-100 shadow-lg shadow-amber-900/30"
                    : "border-red-800/80 bg-transparent text-red-100/80 hover:border-amber-400/60 hover:text-amber-100"
                }`}
              >
                {labelForCategory(category.id, language)}
              </button>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl border border-red-800/40 bg-[#310d15] p-5 shadow-2xl shadow-black/20">
          <div className="mb-6 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-amber-200/80">{translations[language].category}</p>
              <h2 className="mt-2 text-3xl font-black text-white">{labelForCategory(activeCategory.id, language)}</h2>
            </div>
            <span className="rounded-full border border-red-700 bg-red-950/70 px-3 py-1 text-xs uppercase tracking-[0.2em] text-red-100/80">
              {activeCategory.subtitle}
            </span>
          </div>

          {activeCategory.subcategories && activeCategory.subcategories.length > 0 && (
            <div className="mb-8">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-bold text-amber-100">{translations[language].subcategory}</h3>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {activeCategory.subcategories.map((subcategory) => {
                  const isSelected = activeSubcategory?.id === subcategory.id;

                  return (
                    <button
                      key={subcategory.id}
                      type="button"
                      onClick={() => setActiveSubcategoryId(subcategory.id)}
                      className={`overflow-hidden rounded-2xl border text-left transition-all duration-200 ${
                        isSelected
                          ? "border-amber-400 bg-amber-500/10 shadow-lg shadow-amber-900/10"
                          : "border-red-800/70 bg-[#2d0d14] hover:border-amber-400/60"
                      }`}
                    >
                      <Image
                        src={subcategory.image}
                        alt={subcategory.name}
                        width={800}
                        height={600}
                        loading="eager"
                        className={`h-44 w-full ${isLemonadeImage(subcategory.image) ? "object-contain bg-[#12090c] p-2" : "object-cover"}`}
                      />
                      <div className="px-4 py-3">
                        <div className="text-lg font-bold text-white">{subcategory.name}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div>
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xl font-bold text-amber-100">
                {activeSubcategory ? activeSubcategory.name : activeCategory.name}
              </h3>
              <span className="text-sm text-red-200/80">{displayedDishes.length} {translations[language].positions}</span>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {displayedDishes.map((dish) => {
                const displayName = getLocalizedDishName(dish.id, dish.name, language);

                return (
                  <article
                    key={dish.id}
                    className="overflow-hidden rounded-2xl border border-red-800/60 bg-[#1d090e] shadow-lg shadow-black/20"
                  >
                    <Image
                      src={dish.image}
                      alt={displayName}
                      width={800}
                      height={600}
                      loading="eager"
                      className={`h-52 w-full ${isLemonadeImage(dish.image) ? "object-contain bg-[#12090c] p-2" : "object-cover"}`}
                    />
                    <div className="space-y-3 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="text-xl font-bold text-white">{displayName}</h4>
                        <span className="rounded-full bg-amber-500/15 px-2.5 py-1 text-sm font-bold text-amber-200">
                          {formatPrice(dish.price, language)}
                        </span>
                      </div>
                    <p className="text-sm leading-6 text-red-100/75">{dish.description}</p>

                      <button
                        type="button"
                        onClick={() => addToCart(dish)}
                        className="w-full rounded-xl bg-amber-500 px-4 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[#1b090d] transition hover:bg-amber-400"
                      >
                        {translations[language].order}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsCartOpen(true)}
        aria-label={translations[language].cart}
        className="fixed bottom-5 right-5 z-40 flex items-center justify-center gap-2 rounded-full bg-amber-500 p-3 text-[#1d090d] shadow-2xl shadow-amber-900/40 transition hover:bg-amber-400 sm:px-4 sm:py-3"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 sm:h-5 sm:w-5"
          aria-hidden="true"
        >
          <circle cx="9" cy="19" r="1.5" />
          <circle cx="17" cy="19" r="1.5" />
          <path d="M3 4h2l2.2 9.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L19 7H7" />
        </svg>

        <span className="hidden text-sm font-black uppercase tracking-[0.2em] sm:inline">
          {translations[language].cart}
        </span>

        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#1d090d] px-1.5 text-[10px] font-bold text-amber-200 sm:h-7 sm:min-w-7 sm:px-2 sm:text-xs">
          {cartCount}
        </span>
      </button>

      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end bg-black/60 p-3 backdrop-blur-sm sm:p-5">
          <div className="h-full w-full max-w-lg overflow-auto rounded-[28px] border border-red-700/60 bg-[#2b0d14] p-4 shadow-2xl shadow-black/40 sm:p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-amber-200/80">{translations[language].cart}</p>
                <h3 className="mt-2 text-2xl font-black text-white">{translations[language].totalLabel}</h3>
              </div>

              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-red-700 bg-red-950/70 text-lg text-red-100"
                aria-label="Close cart"
              >
                ×
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="flex min-h-[220px] items-center justify-center rounded-2xl border border-dashed border-red-700/70 bg-[#1b090d] text-center text-red-100/80">
                {translations[language].cartEmpty}
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.dish.id}
                    className="flex gap-3 rounded-2xl border border-red-800/60 bg-[#1b090d] p-3"
                  >
                    <Image
                      src={item.dish.image}
                      alt={item.dish.name}
                      width={120}
                      height={120}
                      className={`h-20 w-20 rounded-xl ${isLemonadeImage(item.dish.image) ? "object-contain bg-[#12090c] p-1" : "object-cover"}`}
                    />

                    <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="text-base font-bold text-white">{item.dish.name}</h4>
                          <p className="mt-1 text-xs text-red-200/80">{formatPrice(item.dish.price, language)}</p>
                        </div>

                        <button
                          type="button"
                          onClick={() => changeCartQuantity(item.dish.id, -item.quantity)}
                          className="text-sm text-red-200 hover:text-white"
                        >
                          ×
                        </button>
                      </div>

                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center rounded-full border border-red-700 bg-[#2c0d15]">
                          <button
                            type="button"
                            onClick={() => changeCartQuantity(item.dish.id, -1)}
                            className="h-9 w-9 text-lg text-red-100"
                          >
                            −
                          </button>
                          <span className="min-w-8 text-center text-sm font-bold text-white">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => changeCartQuantity(item.dish.id, 1)}
                            className="h-9 w-9 text-lg text-red-100"
                          >
                            +
                          </button>
                        </div>

                        <div className="text-sm font-bold text-amber-200">
                          {formatUzs(Number((item.dish.price || "0").replace(/[^\d]/g, "")) * 1000 * item.quantity, language)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 rounded-2xl border border-red-700/60 bg-[#1b090d] p-4">
              <div className="flex items-center justify-between text-sm text-red-100/80">
                <span>{translations[language].totalLabel}</span>
                <span className="text-xl font-black text-white">{formatUzs(cartTotal, language)}</span>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={clearCart}
                className="flex-1 rounded-xl border border-red-700 bg-transparent px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-red-100"
              >
                {translations[language].clear}
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                disabled={cartItems.length === 0}
                className="flex-1 rounded-xl bg-amber-500 px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-[#1b090d] transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {translations[language].orderButton}
              </button>
            </div>
          </div>
        </div>
      )}

      {isCheckoutOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-[28px] border border-red-700/60 bg-[#2b0d14] p-6 shadow-2xl shadow-black/40">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-amber-200/80">{translations[language].formTitle}</p>
                <h3 className="mt-2 text-2xl font-black text-white">{translations[language].totalLabel}</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsCheckoutOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-red-700 bg-red-950/70 text-lg text-red-100 transition hover:border-amber-400 hover:text-amber-200"
                aria-label="Close form"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleCheckoutSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-red-100/80">
                  <span className="mb-2 block font-medium">{translations[language].name}</span>
                  <input
                    value={orderForm.name}
                    onChange={(event) => handleFormChange("name", event.target.value)}
                    placeholder={translations[language].placeholderName}
                    className="w-full rounded-xl border border-red-700 bg-[#1a090d] px-3 py-3 text-white placeholder:text-red-200/40 focus:border-amber-400 focus:outline-none"
                  />
                </label>

                <label className="block text-sm text-red-100/80">
                  <span className="mb-2 block font-medium">{translations[language].phone}</span>
                  <input
                    value={orderForm.phone}
                    onChange={(event) => handleFormChange("phone", event.target.value)}
                    placeholder={translations[language].placeholderPhone}
                    className="w-full rounded-xl border border-red-700 bg-[#1a090d] px-3 py-3 text-white placeholder:text-red-200/40 focus:border-amber-400 focus:outline-none"
                  />
                </label>
              </div>

              <label className="block text-sm text-red-100/80">
                <span className="mb-2 block font-medium">{translations[language].address}</span>
                <textarea
                  value={orderForm.address}
                  onChange={(event) => handleFormChange("address", event.target.value)}
                  placeholder={translations[language].placeholderAddress}
                  rows={3}
                  className="w-full rounded-xl border border-red-700 bg-[#1a090d] px-3 py-3 text-white placeholder:text-red-200/40 focus:border-amber-400 focus:outline-none"
                />
              </label>

              <label className="block text-sm text-red-100/80">
                <span className="mb-2 block font-medium">{translations[language].comment}</span>
                <textarea
                  value={orderForm.comment}
                  onChange={(event) => handleFormChange("comment", event.target.value)}
                  placeholder={translations[language].placeholderComment}
                  rows={2}
                  className="w-full rounded-xl border border-red-700 bg-[#1a090d] px-3 py-3 text-white placeholder:text-red-200/40 focus:border-amber-400 focus:outline-none"
                />
              </label>

              <div className="rounded-2xl border border-amber-400/40 bg-amber-500/10 p-3 text-sm text-amber-100">
                <div className="text-amber-200/80">{translations[language].total}</div>
                <div className="mt-2 text-2xl font-black text-white">{formatUzs(cartTotal, language)}</div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsCheckoutOpen(false)}
                  className="flex-1 rounded-xl border border-red-700 bg-transparent px-4 py-3 text-sm font-bold uppercase tracking-[0.16em] text-red-100 transition hover:border-red-500 hover:text-white"
                >
                  {translations[language].cancel}
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-xl bg-amber-500 px-4 py-3 text-sm font-bold uppercase tracking-[0.16em] text-[#1b090d] transition hover:bg-amber-400"
                >
                  {translations[language].send}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;