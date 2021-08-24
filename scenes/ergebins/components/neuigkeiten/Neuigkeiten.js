import { useSelector } from "react-redux";
import Neuigkeiten from "../../../../shareable/Neuigkeiten";

const NeuigkeitenSection = () => {
  const { pageText } = useSelector((state) => state.ergebnis);
  const btntext = "mehr neuigkeiten";
  const news = useSelector(({ news }) => news);

  const neuigkeiten = news.newsReports.find(
    (n) => n.position === "HomePageOne"
  );
  const neuigkeitenSecond = news.newsReports.find(
    (n) => n.position === "HomePageTwo"
  );

  return (
    <div className="neuigkeiten__block">
      <h2>{pageText?.inspiration_header}</h2>
      <div className="neuigkeiten">
        <Neuigkeiten
          btntext={btntext}
          neuigkeiten={neuigkeiten}
          neuigkeitenSecond={neuigkeitenSecond}
        />
      </div>
    </div>
  );
};

export default NeuigkeitenSection;
