import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function ProductOffers() {
  const { notFoundData } = useSelector((state) => state.notFoundReducer);
  
  return (
    <div className="offers__container">
      <div className="offers__container__title">
        <h2>{notFoundData?.section2?.title}</h2>
        <p>{notFoundData?.section2?.subtitle}</p>
      </div>

      <div className="offers__container__cards">
        {notFoundData?.section3?.map((item, index) => {
          return (
            <div className="offers__container__cards__card" key={index}>
              <Image
                src={item.image.url }
                alt="Picture"
                width={488}
                height={305}
                objectFit="cover"
              />
              <h2>{item.title}</h2>
              <p>{item.description}</p>

              <Link href={`${notFoundData?.section3?.link}`}>
                <a>ZUR KATEGORIE</a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
