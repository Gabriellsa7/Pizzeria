import { FaIdCard } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import line from "../../../../../assets/icons/Line.svg";

export const items = [
  {
    name: "Personal information",
    img: FaIdCard,
  },
  {
    name: "My location",
    img: FaLocationDot,
  },
  {
    name: "Change number",
    img: FaPhoneAlt,
  },
  {
    name: "Payment",
    img: FaCreditCard,
  },
];

export { IoIosArrowForward, line };
