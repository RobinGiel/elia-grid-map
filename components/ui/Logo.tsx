import Link from "next/link";
import Image from "next/image";
import { img } from "@assets/index";

const Logo = ({ ...props }) => {
  return (
    <Link href="/">
      <Image alt="50hertz Logo" src={img} width={140} {...props} />
    </Link>
  );
};

export default Logo;
