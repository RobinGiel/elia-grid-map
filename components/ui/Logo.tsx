import Image from "next/image";
import { img } from "@assets/index";

const Logo = ({ ...props }) => {
  return <Image alt="50hertz Logo" priority src={img} width={140} {...props} />;
};

export default Logo;
