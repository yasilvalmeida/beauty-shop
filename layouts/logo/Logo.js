import React from "react";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="mobileHeader__container__logo">
      <Link href={"/"}>
        <a href="/">
          {/* <Image
            src="/logo.png"
            alt="Das Parfum"
            width={308}
            height={75}
            layout="responsive"
          /> */}
          <img src="/logo.png" alt="Das Parfum" width="100px" />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
