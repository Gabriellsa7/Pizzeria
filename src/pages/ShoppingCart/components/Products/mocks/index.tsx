import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";

import { MdKeyboardArrowUp } from "react-icons/md";

import pepperoniPizza from "../../../../../assets/RecomendedImgs/PepperoniPizza.png";
import pizzaPortuguesa from "../../../../../assets/RecomendedImgs/PizzaPortuguesa.png";
import pizzaPortuguesaWithEggs from "../../../../../assets/RecomendedImgs/PizzaPortuguesaWithEggs.png";

export const products = [
  {
    id: 0,
    name: "Pepperoni Pizza",
    img: pepperoniPizza,
    price: 59.99,
    subTotal: 59.99,
  },
  {
    id: 1,
    name: "Pizza Portuguesa",
    img: pizzaPortuguesa,
    price: 59.99,
    subTotal: 59.99,
  },
  {
    id: 2,
    name: "Pizza Portuguesa With Eggs",
    img: pizzaPortuguesaWithEggs,
    price: 59.99,
    subTotal: 59.99,
  },
];
export { MdKeyboardArrowDown, IoMdCloseCircleOutline, MdKeyboardArrowUp };
