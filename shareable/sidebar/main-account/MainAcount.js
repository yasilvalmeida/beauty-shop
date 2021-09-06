import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const MainAcount = () => {
  const route = useRouter();
  const { kontoMainBoxesData } = useSelector((state) => state.konto);
  return (
    <div className="mainAccount__container">
      <ul className="mainAccount__container__list">
        {kontoMainBoxesData?.map((item, i) => (
          <li
            className={
              route.asPath === item?.url
                ? "activekonto"
                : "mainAccount__container__list--item"
            }
          >
            <Link href={item?.url || ""}>{item?.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainAcount;
