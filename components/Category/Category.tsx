"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import blackTea from "@/img/drinks/tea/black_tea.png";
import greenTea from "@/img/drinks/tea/green_tea.png";
import blueCuracaoMojito from "@/img/drinks/lemonades/Мохито Голубая Кюрасао.jpg";
import blueCuracaoMojitoSmall from "@/img/drinks/lemonades/Мохито Голубая Кюрасао маленький.jpg";
import orangeMojito from "@/img/drinks/lemonades/Мохито Апельсиновый.jpg";
import orangeMojitoSmall from "@/img/drinks/lemonades/Мохито Апельсиновый маленький.jpg";
import berryMojito from "@/img/drinks/lemonades/Мохито клубничный.jpg";
import berryMojitoSmall from "@/img/drinks/lemonades/Мохито клубничный маленький.jpg";
import passionFruitMojito from "@/img/drinks/lemonades/Мохито Маракуйя.jpg";
import passionFruitMojitoSmall from "@/img/drinks/lemonades/Мохито Маракуйя маленький.jpg";
import bbqPizza from "@/img/meals/pizza/барбекю пицца.jpg";
import chickenPizza from "@/img/meals/pizza/пицца с курицой.jpg";
import fourCheesePizza from "@/img/meals/pizza/пицца 4 сыра.jpg";
import fumePizza from "@/img/meals/pizza/Пицца фуме.jpg";
import margaritaPizza from "@/img/meals/pizza/пицца маргарита.jpg";
import mexicanPizza from "@/img/meals/pizza/мексинкая пицца.jpg";
import pepperoniPizza from "@/img/meals/pizza/пепперони.jpg";
import fourSeasonsPizza from "@/img/meals/pizza/пицца 4 сезона.jpg";
import samuraiEggplant from "@/img/salad/Самурай баклажан.jpg";
import greekFreshSalad from "@/img/salad/Салат греческий.jpg";
import shrimpRocketSalad from "@/img/salad/Салат рукола с креветками.jpg";
import shrimpCaesarSalad from "@/img/salad/Цезарь с креветками.jpg";
import chickenCaesarSalad from "@/img/salad/Цезарь с курицой.jpg";
import shrimpPassionSalad from "@/img/salad/С креветками   соусом маракуйся.jpg";
import salmonPoke from "@/img/salad/поке с лососем.jpg";
import snackSoftRolls from "@/img/snacks/нежные роллы.jpg";
import snackCheeseStick from "@/img/snacks/сырная палочка.jpg";
import snackCheeseBalls from "@/img/snacks/сырные шарики.jpg";
import snackGarlicToast from "@/img/snacks/чесночная гренка.jpg";
import snackChocolateRolls from "@/img/snacks/шоколадные роллы.jpg";
import snackWasabiShrimp from "@/img/snacks/КРЕВЕТКИ ВАСАБИ.jpg";
import setCalifornia from "@/img/sets/california.jpg";
import setChicken from "@/img/sets/chicken.jpg";
import setDragon from "@/img/sets/dragon.jpg";
import setImperial from "@/img/sets/imperial.jpg";
import setMini from "@/img/sets/miniset.jpg";
import setPremium from "@/img/sets/premium.jpg";
import setSamurai from "@/img/sets/samurai.jpg";
import setTokyo from "@/img/sets/tokyo.jpg";
import americanHotRoll from "@/img/hot_rolls/American_Hot_Roll.jpg";
import creamyEelHotRoll from "@/img/hot_rolls/Creamy_Eel_Hot_Rol.jpg";
import creamySalmonRoll from "@/img/hot_rolls/Creamy_Salmon_Roll.jpg";
import creamySpicySalmonRoll from "@/img/hot_rolls/Creamy_Spicy_Salmon_Roll.jpg";
import ebiHotSpiceRoll from "@/img/hot_rolls/Ebi_Hot_Spice_Roll.jpg";
import hawaiiHotRoll from "@/img/hot_rolls/Hawaii_Hot_Roll.jpg";
import hotDogChicken from "@/img/hot_rolls/hotdogwithchicken.jpg";
import hotPhiladelphiaRoll from "@/img/hot_rolls/Hot_Philadelphia_Roll.jpg";
import salmonHotDog from "@/img/hot_rolls/Salmon_Sushi_Hot_Dog.jpg";
import shrimpHotDog from "@/img/hot_rolls/Shrimp_Sushi_Hot_Dog.jpg";
import surimiShrimpHotRoll from "@/img/hot_rolls/Surimi_and_Shrimp_Hot_Roll.jpg";
import alaska from "@/img/cold_rolls/alaska.jpg";
import bonitoEel from "@/img/cold_rolls/bonito eek.jpg";
import bonitoSalmon from "@/img/cold_rolls/bonito salmon.jpg";
import bonitoSpicy from "@/img/cold_rolls/bonito_spicy.jpg";
import californiaCrab from "@/img/cold_rolls/california crab.jpg";
import californiaSalmon from "@/img/cold_rolls/california salmon.jpg";
import californiaShrimp from "@/img/cold_rolls/california shrimp.jpg";
import crunchyRolls from "@/img/cold_rolls/crunchy rolls.jpg";
import greenAlaska from "@/img/cold_rolls/green_alaska.jpg";
import imperator from "@/img/cold_rolls/imperator.jpg";
import imperatorSalmon from "@/img/cold_rolls/imperator_salmon.jpg";
import imperatorShrimp from "@/img/cold_rolls/imperator_shrimp.jpg";
import miniAvocado from "@/img/cold_rolls/mini avocado.jpg";
import miniEel from "@/img/cold_rolls/mini eel.jpg";
import miniCucumber from "@/img/cold_rolls/mini_cucumber.jpg";
import miniSalmon from "@/img/cold_rolls/mini_salmon.jpg";
import miniShrimp from "@/img/cold_rolls/mini_shrimp.jpg";
import philadelphiaGigant from "@/img/cold_rolls/philadelfia gigant.jpg";
import philadelphia from "@/img/cold_rolls/philadelfia.jpg";
import philadelphiaClassic from "@/img/cold_rolls/philadelfia_classic.jpg";
import philadelphiaCrab from "@/img/cold_rolls/philadelfia_crab.jpg";
import philadelphiaGreenOnion from "@/img/cold_rolls/philadelfia_green_onion.jpg";
import philadelphiaShrimp from "@/img/cold_rolls/philadelfia_shrimp.jpg";
import premiumHongKong from "@/img/cold_rolls/premium hongkong.jpg";
import premiumSalmon from "@/img/cold_rolls/premium salmon.jpg";
import premiumShrimp from "@/img/cold_rolls/premium shrimp.jpg";
import premiumTuna from "@/img/cold_rolls/premium tuna.jpg";
import premiumDragon from "@/img/cold_rolls/premium_dragon.jpg";
import rollsTomYam from "@/img/cold_rolls/rolls_tomyam.jpg";
import royalty from "@/img/cold_rolls/royalty.jpg";
import samurai from "@/img/cold_rolls/samurai.jpg";
import tobikiri from "@/img/cold_rolls/tobikiri.jpg";
import unagiUramaki from "@/img/cold_rolls/Unagi Uramaki.jpg";
import unagiCheese from "@/img/cold_rolls/unagi_cheese.jpg";
import yasay from "@/img/cold_rolls/yasay.jpg";
import wokN12BeefRice from "@/img/woks/N-12 ВОК ГОВЯДИНА С РИСОМ.jpg";
import wokN3SeafoodBuckwheat from "@/img/woks/N-3 ГРЕЧНЕВАЯ ЛАПША С МОРЕПРОДУКТАМИ.jpg";
import wokDoubleBeef from "@/img/woks/ВОК №,1 ДВОЙНОЙ ГОВЯДИНА.jpg";
import wokN4ChickenUdon from "@/img/woks/N-4 ВОК ЛАПША УДОН С КУРИЦЕЙ.jpg";
import wokN11Chicken from "@/img/woks/N-11 ВОК С КУРИЦЕЙ.jpg";
import wokN2Beef from "@/img/woks/N-2 ВОК ГОВЯЖИЙ.jpg";
import wokN6Seafood from "@/img/woks/N-6 ВОК МОРЕПРОДУКТАМИ.jpg";
import wokN9ChickenBuckwheat from "@/img/woks/N-9 ГРЕЧНЕВАЯ ЛАПША С КУРИЦЕЙ.jpg";
import teriyakiVegetablesRice from "@/img/woks/Овощи терияки с рисом.jpg";
import wokN7SalmonUdon from "@/img/woks/N-7 ВОК ЛАПША УДОН С ЛОСОСЕМ.jpg";
import wokN10BeefBuckwheat from "@/img/woks/N-10 ГРЕЧНЕВАЯ ЛАПША С ГОВЯДИНОЙ.jpg";
import wokN5BeefUdon from "@/img/woks/N-5 ВОК ЛАПША УДОН С говядиной.jpg";
import wokN8ChickenUdon from "@/img/woks/N-8 ЛАПША УДОН С КУРИЦЕЙ.jpg";

const coldRollImages = [
  premiumDragon.src,
  philadelphiaGreenOnion.src,
  miniSalmon.src,
  philadelphiaShrimp.src,
  yasay.src,
  rollsTomYam.src,
  bonitoSpicy.src,
  premiumShrimp.src,
  philadelphiaGigant.src,
  miniShrimp.src,
  crunchyRolls.src,
  californiaCrab.src,
  premiumTuna.src,
  unagiUramaki.src,
  imperator.src,
  bonitoSalmon.src,
  miniAvocado.src,
  premiumHongKong.src,
  philadelphiaClassic.src,
  imperatorShrimp.src,
  samurai.src,
  alaska.src,
  tobikiri.src,
  miniCucumber.src,
  philadelphia.src,
  miniEel.src,
  royalty.src,
  californiaSalmon.src,
  philadelphiaCrab.src,
  unagiCheese.src,
  californiaShrimp.src,
  premiumSalmon.src,
  bonitoEel.src,
  greenAlaska.src,
  imperatorSalmon.src,
];

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
    price: "34000",
    image: samuraiEggplant.src,
  },
  {
    id: "salad2",
    name: "Greek Salad",
    description: "Свежие овощи, сыр, маслины и ароматное оливковое масло.",
    price: "39000",
    image: greekFreshSalad.src,
  },
  {
    id: "salad3",
    name: "Non Crispy Eggplant",
    description: "Мягкий баклажан с выразительным вкусом и нежной текстурой.",
    price: "36000",
    image: samuraiEggplant.src,
  },
  {
    id: "salad4",
    name: "Prawn and Rocket Salad",
    description: "Креветки, руккола и свежие овощи в лёгком фирменном соусе.",
    price: "43000",
    image: shrimpRocketSalad.src,
  },
  {
    id: "salad5",
    name: "Shrimp Caesar",
    description: "Салат с креветками, листьями салата, сыром и классическим соусом.",
    price: "45000",
    image: shrimpCaesarSalad.src,
  },
  {
    id: "salad6",
    name: "Shrimp Chicken",
    description: "Комбинация курицы и креветок с освежающей овощной основой.",
    price: "47000",
    image: chickenCaesarSalad.src,
  },
  {
    id: "salad7",
    name: "Shrimp with Passion Fruit Sauce",
    description: "Креветки в ярком соусе маракуйи с лёгкой кислинкой и свежестью.",
    price: "49000",
    image: shrimpPassionSalad.src,
  },
  {
    id: "salad8",
    name: "Vitamin Salad",
    description: "Витаминный микс свежих овощей и зелени для лёгкого питания.",
    price: "32000",
    image: salmonPoke.src,
  },
];

const snackDishes: Dish[] = [
  {
    id: "snack-wasabi-shrimp",
    name: "Креветки Васаби",
    description: "Свежие креветки с лёгким васаби-акцентом и ярким вкусом.",
    price: "59000",
    image: snackWasabiShrimp.src,
  },
  {
    id: "snack-soft-rolls",
    name: "Нежные роллы",
    description: "Лёгкая и мягкая закуска с нежным вкусом.",
    price: "18",
    image: snackSoftRolls.src,
  },
  {
    id: "snack-cheese-stick",
    name: "Сырная палочка",
    description: "Сытная закуска с насыщенным сырным вкусом.",
    price: "22",
    image: snackCheeseStick.src,
  },
  {
    id: "snack-cheese-balls",
    name: "Сырные шарики",
    description: "Хрустящие сырные шарики с золотистой корочкой.",
    price: "21",
    image: snackCheeseBalls.src,
  },
  {
    id: "snack-garlic-toast",
    name: "Чесночная гренка",
    description: "Пикантная гренка с ароматом чеснока и зелени.",
    price: "19",
    image: snackGarlicToast.src,
  },
  {
    id: "snack-chocolate-rolls",
    name: "Шоколадные роллы",
    description: "Сладкая закуска для любителей десерта.",
    price: "24",
    image: snackChocolateRolls.src,
  },
];

const pizzaDishes: Dish[] = [
  {
    id: "pizza1",
    name: "Пицца с курицей",
    description: "Сочная пицца с курицей и ароматным соусом.",
    price: "61",
    image: chickenPizza.src,
  },
  {
    id: "pizza2",
    name: "Пицца 4 сыра",
    description: "Пикантная пицца с колбасками пепперони.",
    price: "71",
    image: fourCheesePizza.src,
  },
  {
    id: "pizza3",
    name: "Пепперони",
    description: "Пикантная пицца с колбасками пепперони.",
    price: "68",
    image: pepperoniPizza.src,
  },
  {
    id: "pizza4",
    name: "Фуме",
    description: "Пицца с насыщенным ароматом и сырной корочкой.",
    price: "59",
    image: fumePizza.src,
  },
  {
    id: "pizza5",
    name: "Пицца 4 сезона",
    description: "Пицца с набором сезонных вкусов и начинок.",
    price: "92",
    image: fourSeasonsPizza.src,
  },
  {
    id: "pizza6",
    name: "Мексиканская",
    description: "Острая пицца с яркими специями и сочной начинкой.",
    price: "90",
    image: mexicanPizza.src,
  },
  {
    id: "pizza7",
    name: "Маргарита",
    description: "Классическая пицца с томатным соусом и сыром.",
    price: "52",
    image: margaritaPizza.src,
  },
  {
    id: "pizza8",
    name: "BBQ Пицца",
    description: "Пицца с соусом BBQ, курицей и ароматными специями.",
    price: "71",
    image: bbqPizza.src,
  },
];

const coldRollDishes: Dish[] = [
  { id: "cold-roll-1", name: "Премиум Дракон", description: "Свежий ролл с фирменной начинкой.", price: "126", image: premiumDragon.src },
  { id: "cold-roll-2", name: "Филадельфия зелёный лук", description: "Нежный ролл с зелёным луком и сливочным вкусом.", price: "62", image: philadelphiaGreenOnion.src },
  { id: "cold-roll-3", name: "Мини с лососем", description: "Компактный ролл с лососем.", price: "39", image: miniSalmon.src },
  { id: "cold-roll-4", name: "Филадельфия креветка", description: "Сочный ролл с креветкой и сливочным сыром.", price: "68", image: philadelphiaShrimp.src },
  { id: "cold-roll-5", name: "Ясай", description: "Лёгкий ролл в классическом стиле.", price: "35", image: yasay.src },
  { id: "cold-roll-6", name: "Том Ям", description: "Ролл с ярким и острым вкусом.", price: "75", image: rollsTomYam.src },
  { id: "cold-roll-7", name: "Бонито спайси", description: "Острый тунец, огурец, перец.", price: "60", image: bonitoSpicy.src },
  { id: "cold-roll-8", name: "Премиум креветка", description: "Премиальный ролл с креветкой.", price: "100", image: premiumShrimp.src },
  { id: "cold-roll-9", name: "Филадельфия гигант", description: "Большой ролл с насыщенным вкусом.", price: "83.3", image: philadelphiaGigant.src },
  { id: "cold-roll-10", name: "Мини с креветкой", description: "Мини-ролл с креветкой.", price: "26.43", image: miniShrimp.src },
  { id: "cold-roll-11", name: "Хрустящие роллы", description: "Роллы с хрустящей текстурой.", price: "53", image: crunchyRolls.src },
  { id: "cold-roll-12", name: "Калифорния краб", description: "Ролл с крабом и свежими ингредиентами.", price: "52", image: californiaCrab.src },
  { id: "cold-roll-13", name: "Премиум тунец", description: "Тунец в премиальной подаче.", price: "134", image: premiumTuna.src },
  { id: "cold-roll-14", name: "Унаги урамаки", description: "Классический ролл с унаги.", price: "71.6", image: unagiUramaki.src },
  { id: "cold-roll-15", name: "Император", description: "Фирменный ролл с богатым вкусом.", price: "80", image: imperator.src },
  { id: "cold-roll-16", name: "Бонито с лососем", description: "Комбинация бонито и лосося.", price: "57.7", image: bonitoSalmon.src },
  { id: "cold-roll-17", name: "Мини с авокадо", description: "Мини-ролл с авокадо.", price: "23.4", image: miniAvocado.src },
  { id: "cold-roll-18", name: "Премиум гонконг", description: "Премиальный ролл в гонконгском стиле.", price: "110", image: premiumHongKong.src },
  { id: "cold-roll-19", name: "Филадельфия ролл", description: "Классический филадельфия ролл.", price: "76.3", image: philadelphiaClassic.src },
  { id: "cold-roll-20", name: "Император с креветкой", description: "Императорский ролл с креветкой.", price: "72", image: imperatorShrimp.src },
  { id: "cold-roll-21", name: "Самурай", description: "Ролл в фирменном самурайском стиле.", price: "37", image: samurai.src },
  { id: "cold-roll-22", name: "Аляска", description: "Популярный ролл с классическим вкусом.", price: "60", image: alaska.src },
  { id: "cold-roll-23", name: "Тобикири", description: "Нежный ролл с мягкой текстурой.", price: "84", image: tobikiri.src },
  { id: "cold-roll-24", name: "Мини с огурцами", description: "Лёгкий мини-ролл с огурцом.", price: "25", image: miniCucumber.src },
  { id: "cold-roll-25", name: "Филадельфия", description: "Классический сливочный ролл.", price: "84", image: philadelphia.src },
  { id: "cold-roll-26", name: "Мини с угрем", description: "Мини-ролл с угрем.", price: "27", image: miniEel.src },
  { id: "cold-roll-27", name: "Ролл королевский", description: "Ролл с королевской подачей и вкусом.", price: "54", image: royalty.src },
  { id: "cold-roll-28", name: "Ролл Калифорния с лососем", description: "Классическая Калифорния с лососем.", price: "56", image: californiaSalmon.src },
  { id: "cold-roll-29", name: "Ф краб", description: "Ролл с крабом и свежей начинкой.", price: "85", image: philadelphiaCrab.src },
  { id: "cold-roll-30", name: "Унаги", description: "Классический ролл с унаги.", price: "68", image: unagiCheese.src },
  { id: "cold-roll-31", name: "Калифорния креветка", description: "Ролл с креветкой в стиле Калифорния.", price: "63", image: californiaShrimp.src },
  { id: "cold-roll-32", name: "Премиум лосось", description: "Премиальный ролл с лососем.", price: "112", image: premiumSalmon.src },
  { id: "cold-roll-33", name: "Бонито", description: "Ролл с бонито и ярким вкусом.", price: "60", image: bonitoEel.src },
  { id: "cold-roll-34", name: "Маленький с угрем", description: "Небольшой ролл с угрем.", price: "28", image: miniEel.src },
  { id: "cold-roll-35", name: "Калифорния с лососем", description: "Свежий ролл Калифорния с лососем.", price: "56", image: californiaSalmon.src },
  { id: "cold-roll-36", name: "Филадельфия краб", description: "Филадельфия с крабом.", price: "85", image: philadelphiaCrab.src },
  { id: "cold-roll-37", name: "Зелёная Аляска", description: "Свежий ролл с зелёным акцентом.", price: "60", image: greenAlaska.src },
  { id: "cold-roll-38", name: "Император с лососем", description: "Ролл с лососем в императорском стиле.", price: "97", image: imperatorSalmon.src },
];

const menu: MenuCategory[] = [
  {
    id: "sets",
    name: "Сеты",
    subtitle: "Готовые наборы",
    image: setChicken.src,
    dishes: [
      {
        id: "set-chicken-rolls",
        name: "Куринные роллы",
        description: "Сочный сет с куриными роллами.",
        price: "221",
        image: setChicken.src,
      },
      {
        id: "set-mini",
        name: "Мини сет",
        description: "Компактный сет для небольшой компании.",
        price: "147",
        image: setMini.src,
      },

      
      {
        id: "set-samurai",
        name: "Сет Самурай",
        description: "Фирменный сет с яркими роллами и классическим вкусом.",
        price: "640",
        image: setSamurai.src,
      },
      {
        id: "set-california",
        name: "Сет Калифорния",
        description: "Популярный сет с лёгкой и свежей начинкой.",
        price: "267",
        image: setCalifornia.src,
      },
      {
        id: "set-imperial",
        name: "Сет Императорский",
        description: "Премиальный сет с особым набором вкусов.",
        price: "260",
        image: setImperial.src,
      },
      {
        id: "set-tokyo",
        name: "Сет Токио",
        description: "Большой сет в японском стиле с разнообразием вкусов.",
        price: "512",
        image: setTokyo.src,
      },
      {
        id: "set-salmon",
        name: "Сет Лосось",
        description: "Сет с лососем и свежими ингредиентами.",
        price: "284",
        image: setTokyo.src,
      },
      {
        id: "set-premium",
        name: "Сет Премиум",
        description: "Премиальный сет с роскошным набором роллов.",
        price: "512",
        image: setPremium.src,
      },
      {
        id: "set-dragon",
        name: "Сет Дракон",
        description: "Элитный сет с оригинальным сочетанием вкусов.",
        price: "272",
        image: setDragon.src,
      },
    ],
  },
  {
    id: "cold-rolls",
    name: "Холодные роллы",
    subtitle: "Свежие роллы",
    image: coldRollImages[0],
    dishes: coldRollDishes,
  },
  {
    id: "hot-rolls",
    name: "Горячие роллы",
    subtitle: "Тёплые роллы",
    image: americanHotRoll.src,
    dishes: [
      {
        id: "hot-roll-salmon-creamy",
        name: "Сливочный лосось",
        description: "Горячий ролл со сливочным лососем.",
        price: "64",
        image: creamySalmonRoll.src,
      },
      {
        id: "hot-roll-hotdog-chicken",
        name: "Хот-дог с курицей",
        description: "Горячий хот-дог с курицей.",
        price: "75",
        image: hotDogChicken.src,
      },
      {
        id: "hot-roll-hotdog-shrimp",
        name: "Хот-дог с креветкой",
        description: "Горячий хот-дог с креветкой.",
        price: "82",
        image: shrimpHotDog.src,
      },
      {
        id: "hot-roll-hotdog-salmon",
        name: "Хот-дог с лососем",
        description: "Горячий хот-дог с лососем.",
        price: "92",
        image: salmonHotDog.src,
      },
      {
        id: "hot-roll-hawaii",
        name: "Гавайи от шефа",
        description: "Горячий ролл с экзотическим вкусом.",
        price: "60",
        image: hawaiiHotRoll.src,
      },
      {
        id: "hot-roll-ebi-spice",
        name: "Эби хот спайс",
        description: "Пикантный ролл с креветкой и острым вкусом.",
        price: "54",
        image: ebiHotSpiceRoll.src,
      },
      {
        id: "hot-roll-creamy-eel",
        name: "Сливочный с угрем",
        description: "Нежный ролл со сливочным вкусом и угрём.",
        price: "64",
        image: creamyEelHotRoll.src,
      },
      {
        id: "hot-roll-surimi-shrimp",
        name: "Сурими с креветкой",
        description: "Горячий ролл с сурими и креветкой.",
        price: "54",
        image: surimiShrimpHotRoll.src,
      },
      {
        id: "hot-roll-creamy-spicy-salmon",
        name: "Сливочный лосось спайс",
        description: "Горячий ролл со сливочным и острым лососем.",
        price: "66",
        image: creamySpicySalmonRoll.src,
      },
      {
        id: "hot-roll-american",
        name: "Американский горячий ролл",
        description: "Пикантный американский горячий ролл.",
        price: "70",
        image: americanHotRoll.src,
      },
      {
        id: "hot-roll-philadelphia",
        name: "Горячая Филадельфия",
        description: "Горячая Филадельфия с богатым сливочным вкусом.",
        price: "82",
        image: hotPhiladelphiaRoll.src,
      },
    ],
  },
  {
    id: "pizza",
    name: "Пицца",
    subtitle: "Итальянская классика",
    image: pizzaDishes[0].image,
    dishes: pizzaDishes,
  },
  {
    id: "wok",
    name: "WOK",
    subtitle: "Азиатская кухня",
    image: wokN12BeefRice.src,
    dishes: [
      {
        id: "wok-n12-beef-rice",
        name: "N-12 ВОК говядина с рисом",
        description: "Говядина, рис и свежие овощи в ярком wok-соусе.",
        price: "62000",
        image: wokN12BeefRice.src,
      },
      {
        id: "wok-n3-buckwheat-seafood",
        name: "N-3 Гречневая лапша с морепродуктами",
        description: "Гречневая лапша с морепродуктами и соусом wok.",
        price: "83000",
        image: wokN3SeafoodBuckwheat.src,
      },
      {
        id: "wok-double-beef",
        name: "Вок №1 — двойная говядина",
        description: "Насыщенный wok с двойной порцией говядины.",
        price: "82000",
        image: wokDoubleBeef.src,
      },
      {
        id: "wok-n4-chicken-udon",
        name: "N-4 ВОК лапша удон с курицей",
        description: "Удон с курицей и овощами в классическом соусе.",
        price: "62000",
        image: wokN4ChickenUdon.src,
      },
      {
        id: "wok-n11-chicken",
        name: "N-11 ВОК с курицей",
        description: "Курица с овощами и ароматным соусом wok.",
        price: "65600",
        image: wokN11Chicken.src,
      },
      {
        id: "wok-n2-beef",
        name: "N-2 ВОК говяжий",
        description: "Говядина с хрустящими овощами и wok-ароматом.",
        price: "69000",
        image: wokN2Beef.src,
      },
      {
        id: "wok-n6-seafood",
        name: "N-6 ВОК с морепродуктами",
        description: "Морепродукты с овощами и насыщенным соусом.",
        price: "74000",
        image: wokN6Seafood.src,
      },
      {
        id: "wok-n9-chicken-buckwheat",
        name: "N-9 Гречневая лапша с курицей",
        description: "Гречневая лапша с курицей и яркими овощами.",
        price: "63000",
        image: wokN9ChickenBuckwheat.src,
      },
      {
        id: "teriyaki-vegetables-rice",
        name: "Овощи терияки с рисом",
        description: "Лёгкий и сытный вариант с овощами и рисом.",
        price: "25000",
        image: teriyakiVegetablesRice.src,
      },
      {
        id: "wok-n7-salmon-udon",
        name: "N-7 ВОК лапша удон с лососем",
        description: "Удон с лососем и выразительным азиатским вкусом.",
        price: "86000",
        image: wokN7SalmonUdon.src,
      },
      {
        id: "wok-n10-beef-buckwheat",
        name: "N-10 Гречневая лапша с говядиной",
        description: "Гречневая лапша с говядиной и овощами.",
        price: "71300",
        image: wokN10BeefBuckwheat.src,
      },
      {
        id: "wok-n5-beef-udon",
        name: "N-5 ВОК лапша удон с говядиной",
        description: "Удон с говядиной, овощами и фирменным соусом.",
        price: "69900",
        image: wokN5BeefUdon.src,
      },
      {
        id: "wok-n8-chicken-udon",
        name: "N-8 Лапша удон с курицей",
        description: "Лапша удон с курицей и классическим wok-вкусом.",
        price: "60900",
        image: wokN8ChickenUdon.src,
      },
    ],
  },
  {
    id: "soups",
    name: "Супы",
    subtitle: "Тёплые и насыщенные",
    image: wokN2Beef.src,
    dishes: [
      {
        id: "soup1",
        name: "Фобо",
        description: "Азиатский суп с говядиной и ароматными специями.",
        price: "52",
        image: wokN2Beef.src,
      },
      {
        id: "soup2",
        name: "Крем-суп из шампиньонов",
        description: "Нежный сливочный суп с грибами и травами.",
        price: "59",
        image: wokN11Chicken.src,
      },
      {
        id: "soup3",
        name: "Рамен с говядиной",
        description: "Плотный и сытный суп с лапшой и говядиной.",
        price: "62",
        image: wokN10BeefBuckwheat.src,
      },
      {
        id: "soup4",
        name: "Том Ям",
        description: "Острый тайский суп с ярким пряным вкусом.",
        price: "73",
        image: wokN6Seafood.src,
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
    id: "snacks",
    name: "Закуски",
    subtitle: "Лёгкие перекусы",
    image: snackSoftRolls.src,
    dishes: snackDishes,
  },
  {
    id: "lemonades",
    name: "Лимонады",
    subtitle: "Освежающие напитки",
    image: blueCuracaoMojito.src,
    dishes: [
      {
        id: "mohito-blue-small",
        name: "Мохито Голубая Кюрасао маленький",
        description: "Освежающий мохито с ярким вкусом голубой курасао в маленьком объёме.",
        price: "17500",
        image: blueCuracaoMojitoSmall.src,
      },
      {
        id: "mohito-blue",
        name: "Мохито Голубая Кюрасао",
        description: "Освежающий мохито с ярким вкусом голубой курасао.",
        price: "35400",
        image: blueCuracaoMojito.src,
      },
      {
        id: "mohito-berry-small",
        name: "Мохито клубничный маленький",
        description: "Освежающий клубничный мохито в маленьком объёме.",
        price: "17500",
        image: berryMojitoSmall.src,
      },
      {
        id: "mohito-berry",
        name: "Мохито клубничный",
        description: "Свежий клубничный мохито с приятной ягодной кислинкой.",
        price: "35400",
        image: berryMojito.src,
      },
      {
        id: "mohito-orange-small",
        name: "Мохито апельсиновый маленький",
        description: "Освежающий апельсиновый мохито в маленьком объёме.",
        price: "17500",
        image: orangeMojitoSmall.src,
      },
      {
        id: "mohito-orange",
        name: "Мохито апельсиновый",
        description: "Освежающий мохито с цитрусовой ноткой апельсина.",
        price: "35400",
        image: orangeMojito.src,
      },
      {
        id: "mohito-passion-small",
        name: "Мохито маракуйя маленький",
        description: "Мохито с экзотическим вкусом маракуйи в маленьком объёме.",
        price: "17500",
        image: passionFruitMojitoSmall.src,
      },
      {
        id: "mohito-passion",
        name: "Мохито маракуйя",
        description: "Мохито с экзотическим вкусом маракуйи и лёгкой кислинкой.",
        price: "35400",
        image: passionFruitMojito.src,
      },
    ],
  },
  {
    id: "tea",
    name: "Чай",
    subtitle: "Тёплые напитки",
    image: blackTea.src,
    dishes: [
      {
        id: "tea1",
        name: "Спец Чай",
        description: "Фирменный чай по специальному рецепту.",
        price: "36",
        image: blackTea.src,
      },
      {
        id: "tea2",
        name: "Зелёный чай",
        description: "Лёгкий и освежающий напиток для любого времени дня.",
        price: "23",
        image: greenTea.src,
      },
      {
        id: "tea3",
        name: "Чёрный чай",
        description: "Классический ароматный чай с мягким вкусом.",
        price: "21",
        image: blackTea.src,
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
    contacts: "Контакты",
    addressLabel: "Адрес",
    mapOpen: "Открыть карту",
    mapTitle: "SAMURAI SUSHI BUKHARA",
  },
  uzLat: {
    category: "Katalog",
    subcategory: "Bo'limlar",
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
    placeholderName: "Ali",
    placeholderPhone: "+998 99 123 45 67",
    placeholderAddress: "Toshkent, Amir Temur ko'chasi, 12-uy",
    placeholderComment: "Buyurtma uchun izoh",
    alertRequired: "Iltimos, ismingiz, telefon va manzilni kiriting.",
    alertTelegram: "Telegramga yuborish uchun NEXT_PUBLIC_TELEGRAM_BOT_TOKEN va NEXT_PUBLIC_TELEGRAM_CHAT_ID sozlamalarini kiriting",
    success: "Buyurtma Telegramga yuborildi!",
    error: "Buyurtma Telegramga yuborilmadi. Bot sozlamalarini tekshiring.",
    defaultTitle: "Buyurtma",
    cart: "Savat",
    cartEmpty: "Savat bo'sh",
    addToCart: "Savatga qo'shish",
    clear: "Tozalash",
    continue: "Davom etish",
    totalLabel: "Umumiy summa",
    itemCount: "mahsulot",
    orderButton: "Buyurtma berish",
    formTitle: "Mijoz ma'lumotlari",
    contacts: "Kontaktlar",
    addressLabel: "Manzil",
    mapOpen: "Karta ochish",
    mapTitle: "SAMURAI SUSHI BUKHARA",
  },
  uzCy: {
    category: "Каталог",
    subcategory: "Бўлимлар",
    positions: "позициялар",
    order: "Буюртма бериш",
    checkout: "Буюртма бериш",
    name: "Исмингиз",
    phone: "Телефон",
    address: "Манзил",
    quantity: "Миқдор",
    total: "Жами",
    comment: "Изоҳ",
    cancel: "Бекор қилиш",
    send: "Буюртмани юбориш",
    placeholderName: "Али",
    placeholderPhone: "+998 99 123 45 67",
    placeholderAddress: "Тошкент, Амир Темур кўчаси, 12-уй",
    placeholderComment: "Буюртма учун изоҳ",
    alertRequired: "Илтимос, исмингиз, телефон ва манзилни киритинг.",
    alertTelegram: "Telegramга юбориш учун NEXT_PUBLIC_TELEGRAM_BOT_TOKEN ва NEXT_PUBLIC_TELEGRAM_CHAT_ID созламаларини киритинг",
    success: "Буюртма Telegramга юборилди!",
    error: "Буюртма Telegramга юборилмади. Бот созламаларини текширинг.",
    defaultTitle: "Буюртма",
    cart: "Сават",
    cartEmpty: "Сават бўш",
    addToCart: "Саватга қўшиш",
    clear: "Тозалаш",
    continue: "Давом эттириш",
    totalLabel: "Умумий сумма",
    itemCount: "махсулот",
    orderButton: "Буюртма бериш",
    formTitle: "Мижоз маълумотлари",
    contacts: "Контактлар",
    addressLabel: "Манзил",
    mapOpen: "Карта очиш",
    mapTitle: "SAMURAI SUSHI BUKHARA",
  },
};

const subcategoryNameLabels: Record<string, Record<Language, string>> = {
  tea: { ru: "Чай", uzLat: "Choy", uzCy: "Чой" },
  lemonades: { ru: "Лимонады", uzLat: "Limonadlar", uzCy: "Лимонадлар" },
  lemonade: { ru: "Лимонады", uzLat: "Limonadlar", uzCy: "Лимонадлар" },
};

const saladNameLabels: Record<string, Record<Language, string>> = {
  salad1: { ru: "Баклажаны по-пекински", uzLat: "Pekin uslubidagi badyan", uzCy: "Пекин услубидаги бадиян" },
  salad2: { ru: "Греческий салат", uzLat: "Grek salati", uzCy: "Грек салати" },
  salad3: { ru: "Нежные баклажаны", uzLat: "Yumshoq badyanlar", uzCy: "Нозик бадиянлар" },
  salad4: { ru: "Салат с креветками и рукколой", uzLat: "Krevetka va rukkola salati", uzCy: "Креветка ва руккола салати" },
  salad5: { ru: "Креветочный Цезарь", uzLat: "Krevetka Caesar", uzCy: "Креветка Сезар" },
  salad6: { ru: "Курица с креветками", uzLat: "Krevetka bilan tovuq", uzCy: "Креветка билан товуқ" },
  salad7: { ru: "Креветки с соусом маракуйи", uzLat: "Marakuya sousli krevetka", uzCy: "Маракуя соусли креветка" },
  salad8: { ru: "Витаминный салат", uzLat: "Vitamin salati", uzCy: "Витамин салати" },
};

const pizzaNameLabels: Record<string, Record<Language, string>> = {
  pizza1: { ru: "Пицца с курицей", uzLat: "Tovuqli pitsa", uzCy: "Товуқли пицца" },
  pizza2: { ru: "Пицца 4 сыра", uzLat: "4 ta pishloqli pitsa", uzCy: "4 та пишлоқли пицца" },
  pizza3: { ru: "Пепперони", uzLat: "Pepperoni", uzCy: "Пепперони" },
  pizza4: { ru: "Фуме", uzLat: "Fume", uzCy: "Фуме" },
  pizza5: { ru: "Пицца 4 сезона", uzLat: "4 faslli pitsa", uzCy: "4 фаслли пицца" },
  pizza6: { ru: "Мексиканская", uzLat: "Meksikan pitsa", uzCy: "Мексикан пицца" },
  pizza7: { ru: "Маргарита", uzLat: "Margarita", uzCy: "Маргарита" },
  pizza8: { ru: "BBQ Пицца", uzLat: "BBQ pitsa", uzCy: "BBQ пицца" },
};

const dishDescriptionLabels: Record<string, Record<Language, string>> = {
  tea1: { ru: "Классический ароматный чай с мягким вкусом.", uzLat: "Klassik xushbo'y choy yumshoq ta'm bilan.", uzCy: "Классик хушбўй чой юмшоқ таъм билан." },
  tea2: { ru: "Лёгкий и освежающий напиток для любого времени дня.", uzLat: "Har qanday vaqtda qulay va yangitovlik beruvchi ichimlik.", uzCy: "Ҳар қандай вақтда қулай ва янгитовлик берувчи ичимлик." },
  tea3: { ru: "Нежный травяной вкус с яркой свежестью мяты.", uzLat: "Yalpizning yorqin yangilig'i bilan yumshoq o'simlik ta'mi.", uzCy: "Ялпизнинг порлок янгигаўи билан юмшоқ ўсимлик таъми." },
  lemon1: { ru: "Освежающий напиток с яркой цитрусовой кислинкой.", uzLat: "Yorqin sitrus shirin-kislotasi bilan yangitovlik beruvchi ichimlik.", uzCy: "Ёрқин ситрус ширин-кислотаси билан янгитовлик берувчи ичимлик." },
  lemon2: { ru: "Сладкий цитрусовый баланс и лёгкая кислинка.", uzLat: "Shirin sitrus balans va yumshoq kislotalik.", uzCy: "Ширин ситрус баланси ва юмшоқ кислоталик." },
  lemon3: { ru: "Нежный ягодный вкус с идеальной сладостью.", uzLat: "Mukammal shirinlik bilan yumshoq meva ta'mi.", uzCy: "Муккаммал ширинлик билан юмшоқ мева таъми." },
  pizza1: { ru: "Классическая пицца с томатным соусом, сыром и базиликом.", uzLat: "Klassik pitsa pomidor sousi, pishloq va bazilik bilan.", uzCy: "Классик пицца помидор соуси, пишлоқ ва базилик билан." },
  pizza2: { ru: "Пикантная пицца с колбасками пепперони и сыром.", uzLat: "Pepperoni kolbasasi va pishloq bilan achchiq pitsa.", uzCy: "Пепперони колбасаси ва пишлоқ билан аччиқ пицца." },
  pizza3: { ru: "Сливочная пицца с четырьмя видами сыра.", uzLat: "To'rt turdagi pishloq bilan qaymoq pitsa.", uzCy: "Тўрт турдаги пишлоқ билан қаймоқ пицца." },
  pizza4: { ru: "Пицца с насыщенным ароматом и сырной корочкой.", uzLat: "Yuqori aromatik ta'm va pishloq qobig'i bilan pitsa.", uzCy: "Юқори ароматик таъм ва пишлоқ қобиғи билан пицца." },
  pizza5: { ru: "Нежная пицца с курицей, сыром и фирменным соусом цезарь.", uzLat: "Tovuq, pishloq va Caesar sousi bilan yumshoq pitsa.", uzCy: "Товуқ, пишлоқ ва Caesar соуси билан юмшоқ пицца." },
  pizza6: { ru: "Пицца с курицей, ананасом и сырной корочкой.", uzLat: "Tovuq, ananas va pishloq qobig'i bilan pitsa.", uzCy: "Товуқ, ананас ва пишлоқ қобиғи билан пицца." },
  pizza7: { ru: "Сытная пицца с грибами, курицей и сливочным вкусом.", uzLat: "Qo'ziqorin, tovuq va qaymoq ta'mi bilan to'yingan pitsa.", uzCy: "Қўзиқорин, товуқ ва қаймоқ таъми билан тўйинган пицца." },
  pizza8: { ru: "Острая пицца с яркими специями и сочной начинкой.", uzLat: "Yorqin ziravorlar va sersuv to'ldirish bilan achchiq pitsa.", uzCy: "Ёрқин зираворлар ва серсов тўлдириш билан аччиқ пицца." },
  pizza9: { ru: "Пицца с соусом BBQ, курицей и ароматными специями.", uzLat: "BBQ sousi, tovuq va xushbo'y ziravorlar bilan pitsa.", uzCy: "BBQ соуси, товуқ ва хушбоёв зираворлар билан пицца." },
  pizza10: { ru: "Пицца с комбинацией четырёх вкусов и пикантной начинкой.", uzLat: "To'rt ta'mning kombinatsiyasi va achchiq to'ldirish bilan pitsa.", uzCy: "Тўрт таъмнинг комбинацияси ва аччиқ тўлдириш билан пицца." },
};

const labelForCategory = (categoryId: string, language: Language) => {
  const categoryLabels: Record<string, Record<Language, string>> = {
    sets: { ru: "Сеты", uzLat: "Setlar", uzCy: "Сетлар" },
    "cold-rolls": { ru: "Холодные роллы", uzLat: "Sovuq rollar", uzCy: "Совуқ роллар" },
    "baked-rolls": { ru: "Запечённые роллы", uzLat: "Pecheniy rollar", uzCy: "Печений роллар" },
    "hot-rolls": { ru: "Горячие роллы", uzLat: "Issiq rollar", uzCy: "Иссиқ роллар" },
    poke: { ru: "Поке", uzLat: "Poke", uzCy: "Поке" },
    pizza: { ru: "Пицца", uzLat: "Pitsa", uzCy: "Пицца" },
    wok: { ru: "WOK", uzLat: "WOK", uzCy: "WOK" },
    "hot-dishes": { ru: "Горячие блюда", uzLat: "Issiq taomlar", uzCy: "Иссиқ таомлар" },
    soups: { ru: "Супы", uzLat: "Sovlar", uzCy: "Совлар" },
    salads: { ru: "Салаты", uzLat: "Salatlar", uzCy: "Салатлар" },
    snacks: { ru: "Закуски", uzLat: "Fast food", uzCy: "Фаст-фуд" },
    lemonades: { ru: "Лимонады", uzLat: "Limonadlar", uzCy: "Лимонадлар" },
    tea: { ru: "Чай", uzLat: "Choy", uzCy: "Чой" },
  };

  return categoryLabels[categoryId]?.[language] ?? categoryId;
};

const getLocalizedCategorySubtitle = (categoryId: string, fallback: string, language: Language) => {
  const categorySubtitleLabels: Record<string, Record<Language, string>> = {
    sets: { ru: "Готовые наборы", uzLat: "Tayyor to'plamlar", uzCy: "Тайёр топламлар" },
    chef: { ru: "Фирменные блюда", uzLat: "Maxsus taomlar", uzCy: "Максус таомлар" },
    "business-lunches": { ru: "Сытно и быстро", uzLat: "To'yingan va tez", uzCy: "Тўйинган ва тез" },
    "cold-rolls": { ru: "Свежие роллы", uzLat: "Yangi rollar", uzCy: "Янги роллар" },
    "baked-rolls": { ru: "Под сырной корочкой", uzLat: "Pishloq qobig'i ostida", uzCy: "Пишлоқ қобиғи остида" },
    "hot-rolls": { ru: "Тёплые роллы", uzLat: "Issiq rollar", uzCy: "Иссиқ роллар" },
    poke: { ru: "Свежие миски", uzLat: "Yangi idishlar", uzCy: "Янги идишлар" },
    pizza: { ru: "Итальянская классика", uzLat: "Italiya klassikasi", uzCy: "Италия классикаси" },
    wok: { ru: "Азиатская кухня", uzLat: "Osiyo taomlari", uzCy: "Осиё таомлари" },
    "hot-dishes": { ru: "Главные блюда", uzLat: "Asosiy taomlar", uzCy: "Асосий таомлар" },
    soups: { ru: "Тёплые и насыщенные", uzLat: "Issiq va to'yingan", uzCy: "Иссиқ ва тўйинган" },
    salads: { ru: "Свежие блюда", uzLat: "Yangi taomlar", uzCy: "Янги таомлар" },
    snacks: { ru: "Лёгкие перекусы", uzLat: "Yengil salatlar", uzCy: "Енгил салатлар" },
    garnishes: { ru: "К гарниру", uzLat: "Garnir uchun", uzCy: "Гарнир учун" },
    "sweet-rolls": { ru: "Десертные роллы", uzLat: "Desert rollar", uzCy: "Десерт роллар" },
    lemonades: { ru: "Освежающие напитки", uzLat: "Yangi ichimliklar", uzCy: "Янги ичимликлар" },
    tea: { ru: "Тёплые напитки", uzLat: "Issiq ichimliklar", uzCy: "Иссиқ ичимликлар" },
  };

  return categorySubtitleLabels[categoryId]?.[language] ?? fallback;
};

const getLocalizedSubcategoryName = (subcategoryId: string, fallback: string, language: Language) => {
  return subcategoryNameLabels[subcategoryId]?.[language] ?? fallback;
};

const getLocalizedDishName = (dishId: string, fallback: string, language: Language) => {
  return saladNameLabels[dishId]?.[language] ?? pizzaNameLabels[dishId]?.[language] ?? fallback;
};

const getLocalizedDishDescription = (dishId: string, fallback: string, language: Language) => {
  return dishDescriptionLabels[dishId]?.[language] ?? fallback;
};

const normalizePriceAmount = (price: string) => {
  const digits = Number((price || "0").replace(/[^\d.]/g, ""));
  if (!Number.isFinite(digits)) {
    return 0;
  }

  const normalized = digits >= 1000 ? digits : digits * 1000;
  return Math.round(normalized);
};

const formatUzs = (amount: number, language: Language) => {
  const formatted = Number(amount).toLocaleString(language === "ru" ? "ru-RU" : "uz-UZ", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  if (language === "ru") {
    return `${formatted} сум`;
  }

  if (language === "uzLat") {
    return `${formatted} so'm`;
  }

  return `${formatted} сўм`;
};

const formatPrice = (price: string, language: Language) => {
  return formatUzs(normalizePriceAmount(price), language);
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
    [
      blueCuracaoMojito.src,
      blueCuracaoMojitoSmall.src,
      orangeMojito.src,
      orangeMojitoSmall.src,
      berryMojito.src,
      berryMojitoSmall.src,
      passionFruitMojito.src,
      passionFruitMojitoSmall.src,
    ].includes(image);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => {
    const priceValue = normalizePriceAmount(item.dish.price);
    return sum + priceValue * item.quantity;
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

        <div className="mt-8 rounded-3xl border border-red-800/40 bg-[#310d15] p-4 shadow-2xl shadow-black/20 sm:p-5">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.22em] text-amber-200/80 sm:text-xs">{translations[language].category}</p>
              <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">{labelForCategory(activeCategory.id, language)}</h2>
            </div>
            <span className="inline-flex max-w-full rounded-full border border-red-700 bg-red-950/70 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-red-100/80 sm:text-xs">
              {getLocalizedCategorySubtitle(activeCategory.id, activeCategory.subtitle, language)}
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
                        title={subcategory.name}
                        width={800}
                        height={600}
                        loading="eager"
                        className={`h-44 w-full ${isLemonadeImage(subcategory.image) ? "object-contain object-center bg-[#12090c] p-2" : "object-cover"}`}
                      />
                      <div className="px-4 py-3">
                        <div className="text-lg font-bold text-white">
                          {getLocalizedSubcategoryName(subcategory.id, subcategory.name, language)}
                        </div>
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
                {activeSubcategory
                  ? getLocalizedSubcategoryName(activeSubcategory.id, activeSubcategory.name, language)
                  : labelForCategory(activeCategory.id, language)}
              </h3>
              <span className="text-sm text-red-200/80">{displayedDishes.length} {translations[language].positions}</span>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {displayedDishes.map((dish) => {
                const displayName = getLocalizedDishName(dish.id, dish.name, language);
                const displayDescription = getLocalizedDishDescription(dish.id, dish.description, language);

                return (
                  <article
                    key={dish.id}
                    className="overflow-hidden rounded-2xl border border-red-800/60 bg-[#1d090e] shadow-lg shadow-black/20"
                  >
                    <Image
                      src={dish.image}
                      alt={displayName}
                      title={displayName}
                      width={800}
                      height={600}
                      loading="eager"
                      className={`h-52 w-full ${isLemonadeImage(dish.image) ? "object-contain object-center bg-[#12090c] p-2" : "object-cover"}`}
                    />
                    <div className="space-y-3 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="text-xl font-bold text-white">{displayName}</h4>
                        <span className="rounded-full bg-amber-500/15 px-2.5 py-1 text-sm font-bold text-amber-200">
                          {formatPrice(dish.price, language)}
                        </span>
                      </div>
                      <p className="text-sm leading-6 text-red-100/75">{displayDescription}</p>

                      <button
                        type="button"
                        onClick={() => addToCart({ ...dish, name: displayName, description: displayDescription })}
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

      <section id="contacts" className="mx-auto mt-10 max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-[30px] border border-red-800/70 bg-gradient-to-r from-[#1b090d] via-[#2b0d14] to-[#1d090e] p-5 shadow-2xl shadow-black/20 sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500/15 text-amber-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 5.5A2.5 2.5 0 0 1 9.5 3h.4A2.5 2.5 0 0 1 12.4 5.5v1.2A2.5 2.5 0 0 1 10 9.2H9.5A2.5 2.5 0 0 1 7 6.7V5.5Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 8.5h13A2.5 2.5 0 0 1 21 11v4.5A2.5 2.5 0 0 1 18.5 18h-13A2.5 2.5 0 0 1 3 15.5V11a2.5 2.5 0 0 1 2.5-2.5Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.5h7" />
              </svg>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-amber-200/80">{translations[language].contacts}</p>
              <h3 className="mt-1 text-2xl font-black text-white">{translations[language].mapTitle}</h3>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="https://wa.me/998904123232"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-green-500/40 bg-green-500/10 p-4 transition hover:border-green-400 hover:bg-green-500/15"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 text-green-300">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                  <path d="M12.04 2C6.59 2 2.17 6.34 2.17 11.73c0 1.95.58 3.82 1.59 5.42L2 22l4.96-1.64a9.78 9.78 0 0 0 5.08 1.56h.01c5.45 0 9.87-4.34 9.87-9.73S17.49 2 12.04 2Zm0 17.82c-1.52 0-3.02-.4-4.33-1.15l-.31-.18-2.95.98 1-2.87-.21-.31A7.9 7.9 0 0 1 4.1 11.73c0-4.25 3.65-7.7 8.13-7.7 4.48 0 8.13 3.45 8.13 7.7 0 4.26-3.65 7.71-8.13 7.71Zm4.53-5.88c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.16.25-.64.81-.78.98-.14.16-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.38.11-.5.11-.11.25-.29.38-.43.13-.14.17-.25.25-.41.08-.16.04-.3-.02-.42-.06-.13-.56-1.35-.76-1.85-.2-.48-.4-.42-.56-.42h-.48c-.16 0-.42.06-.64.3-.22.25-.85.83-.85 2.03 0 1.2.87 2.36.99 2.52.12.16 1.72 2.62 4.18 3.68.58.25 1.02.4 1.37.51.58.18 1.11.15 1.52.09.46-.07 1.47-.6 1.68-1.18.2-.58.2-1.07.13-1.18-.06-.11-.23-.18-.48-.31Z"/>
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">WhatsApp</p>
                <p className="mt-1 text-lg font-bold text-white">+998 90 412 32 32</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/samurai_house_bukhara?vrfl=MTg1aHllZHp0M3UyMA=="
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-pink-500/40 bg-pink-500/10 p-4 transition hover:border-pink-400 hover:bg-pink-500/15"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500/20 text-pink-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6" aria-hidden="true">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/60">Instagram</p>
                <p className="mt-1 text-lg font-bold text-white">@samurai_house_bukhara</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[30px] border border-red-800/70 bg-[#1b090d] shadow-2xl shadow-black/20">
          <div className="flex flex-col gap-3 border-b border-red-800/70 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.24em] text-amber-200/80 sm:text-xs">{translations[language].addressLabel}</p>
              <h3 className="mt-1 text-lg font-black text-white sm:text-xl">{translations[language].mapTitle}</h3>
            </div>
            <a
              href="https://www.google.com/maps/place/SAMURAI+SUSHI+BUKHARA/@39.7558196,64.3984589,2352m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3f50075ebd56980d:0xf73ac66c15f8e3bb!8m2!3d39.7558036!4d64.4087587!16s%2Fg%2F11p1c58f0b?entry=ttu&g_ep=EgoyMDI2MTAxNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-amber-400/60 bg-amber-500/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-amber-100 transition hover:bg-amber-500/15 sm:text-sm"
            >
              {translations[language].mapOpen}
            </a>
          </div>

          <iframe
            title={translations[language].mapTitle}
            src="https://www.google.com/maps?q=39.7558036,64.4087587&z=16&output=embed"
            className="h-[260px] w-full border-0 sm:h-[320px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

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
                      title={item.dish.name}
                      width={120}
                      height={120}
                      className={`h-20 w-20 rounded-xl ${isLemonadeImage(item.dish.image) ? "object-contain object-center bg-[#12090c] p-1" : "object-cover"}`}
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