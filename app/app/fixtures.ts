import { product } from "./types";

export const staticProductList: product[] = [
  { id: 110, name: "Cape Patch", description: "Hole in your cape? We've got you covered", price: 50 },
  { id: 120, name: "Mask Wax", description: "When villans scuff your mask, use our Mask Wax to get back that superhero sheen." , price : 75 },
  { id: 130, name: "Kryptonite Alarm", description: "Don't get defeated by the next implausible plot twist! This alarm will beep whenever Kryptonite is detected in the vicinity", price: 450 },
];

export const longerStaticProductList: product[] = [
  { id: 210, name: "Wit'o'matic", description: "Shoved a villan into lava and can't come up with a clever one liner? Press the red button and this widget will make a context-specific zinger like 'Hot enough for ya?'", price: 300 },
  { id: 220, name: "Prequelizer", description: "Feel like your career is exhausted? Have slopper writers written you into a corner? Simply go backwards! This fail-safe tool will have you extending your franchise still further", price: 2500 },
].concat(staticProductList);
