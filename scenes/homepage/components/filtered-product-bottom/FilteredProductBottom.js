import Neuigkeiten from "../../../../shareable/Neuigkeiten";
import { useSelector } from "react-redux";

const FilteredProductBottom = () => {
  const btntext = "mehr neuigkeiten";
  const news = useSelector(({ news }) => news);

  const neuigkeiten = news.newsReports.find(
    (n) => n.position === "HomePageOne"
  );
  const neuigkeitenSecond = news.newsReports.find(
    (n) => n.position === "HomePageTwo"
  );

  return (
    <div className="neuigkeiten">
      <Neuigkeiten
        btntext={btntext}
        neuigkeiten={neuigkeiten}
        neuigkeitenSecond={neuigkeitenSecond}
      />
    </div>
  );
};

export default FilteredProductBottom;
