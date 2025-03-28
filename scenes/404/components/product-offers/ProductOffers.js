import Image from "next/image";
import Link from "next/link";

export default function ProductOffers({ notFoundText, notFoundData }) {

  return (
    <div className="offers__container">
      <div className="offers__container__title">
        <h2>{notFoundText?.section_two_title}</h2>
        <p>{notFoundText?.section_two_subtitle}</p>
      </div>

      <div className="offers__container__cards">
        {notFoundData?.map((item, index) => {
          return (
            <div className="offers__container__cards__card" key={index}>
              <Image
                src={item?.image?.url}
                alt="Picture"
                width={488}
                height={305}
                objectFit="cover"
              />
              <h2>{item?.title}</h2>
              <p>{item?.description}</p>

              <Link href={`${item?.link}`}>
                <a>{item?.button}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
