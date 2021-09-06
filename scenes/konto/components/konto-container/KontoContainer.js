import KontoContainerItem from "./konto-container-item/KontoContainerItem";
import { useSelector } from "react-redux";

const KontoContainer = () => {
  const { kontoMainBoxesData } = useSelector((state) => state.konto);
  return (
    <div className="kontoContainer">
      {kontoMainBoxesData?.map((item, i) =>
        i > 0 ? (
          <KontoContainerItem key={`${item?.id}-${item?.title}-${i}`} item={item} />
        ) : (
          <></>
        )
      )}
    </div>
  );
};

export default KontoContainer;
