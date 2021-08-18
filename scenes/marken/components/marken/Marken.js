import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { Space, Spin } from "antd";

const Marken = ({ textData, manufactories }) => {
  const { title, header } = textData;
  const { markenData, markenDataLoaded } = useSelector((state) => state.marken);
  const [newArray, setNewArray] = useState([]);

  const splitArray = (arr, size) => {
    var arr2 = arr.slice(0),
      arrays = [];

    while (arr2.length > 0) {
      arrays.push(arr2.splice(0, size));
    }
    setNewArray([...arrays]);
  };
  const addManufactoriesToLetter = (manufactories, newArray) => {
    manufactories?.map((brand, i) => {
      const { id, name } = brand;
      markenData?.map((letter, j) => {
        let { title, content } = letter;
        const selected = content?.find(
          (brandAdded) => brandAdded.name === brand.name
        );
        if (
          (name.charAt(0) !== " "
            ? name.charAt(0).toUpperCase() === title
            : name.charAt(1).toUpperCase() === title) &&
          selected === undefined
        ) {
          content.push({
            id,
            name,
          });
        }
      });
    });
  };

  useEffect(() => {
    addManufactoriesToLetter(manufactories, markenData);
    splitArray(markenData, 4);
  }, [markenDataLoaded]);

  return (
    <div className={"marken__container"}>
      <div className={"marken__container__header"}>
        <h1 className={"marken__container__header--title"}>{header}</h1>
        <p className={"marken__container__header--subtitle"}>{title}</p>
      </div>
      {markenDataLoaded ? (
        <div className={"loader__component"}>
          <Space size="middle">
            <Spin size="large" />
          </Space>
        </div>
      ) : (
        <>
          {newArray?.map((e) => {
            return (
              <div className={"marken__container__content"}>
                {e.map((letter, index) => {
                  return (
                    <div
                      className={"marken__container__content__item"}
                      key={index}
                    >
                      <h4 className={"marken__container__content__item--title"}>
                        {letter.title}
                      </h4>
                      {letter?.content?.map((brand, key) => {
                        return (
                          <Link href={`/brand/${brand?.id}`} key={key}>
                            <p>
                              <a
                                href={`/brand/${brand?.id}`}
                                className={
                                  "marken__container__content__item--content"
                                }
                              >
                                {brand?.name}
                              </a>
                            </p>
                          </Link>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}
          <div className={"marken__container__mobile__content"}>
            {markenData?.map((letter, index) => {
              return (
                <div className={"marken__container__content__item"} key={index}>
                  <h4 className={"marken__container__content__item--title"}>
                    {letter?.title}
                  </h4>
                  {letter?.content?.map((brand, key) => {
                    return (
                      <Link href={`/brand/${brand?.id}`} key={key}>
                        <p
                          onClick={`/brand/${brand?.id}`}
                          className={
                            "marken__container__content__item--content"
                          }
                        >
                          {brand?.name}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Marken;
