import KontoTable from "../../../../shareable/konto/KontoTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";

const Bestellungen = () => {
  const { kontoPageTextData } = useSelector((state) => state.konto);
  const [single, setSingle] = useState();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const titles = [
    kontoPageTextData?.order_date,
    kontoPageTextData?.order_number,
    kontoPageTextData?.order_status,
    kontoPageTextData?.order_amount,
    kontoPageTextData?.order_details,
  ];
  const year = "2020";
  const data = [
    {
      date: "01.12. 2020",
      code: "YJZGVEF",
      status: "Zustellung erfolgt",
      price: "28,00 €",
    },
    {
      date: "01.12. 2020",
      code: "YJZGVEF",
      status: "Zustellung erfolgt",
      price: "282,00 €",
    },
    {
      date: "01.12. 2020",
      code: "YJZGVEF",
      status: "Zustellung erfolgt",
      price: "428,00 €",
    },
  ];
  
  return (
    <div className={"bestellungen__container"}>
      {/* {!show && <p className={"page_name"}>{kontoPageTextData?.order_header}</p>} */}
      {!show && (
        <h2 className={"bestellungen__container--title"}>
          {kontoPageTextData?.order_header}
        </h2>
      )}
      <div className={`${!show ? "tbl" : ""}`}>
        <KontoTable
          titles={titles}
          year={year}
          data={data}
          single={single}
          setSingle={setSingle}
          show={show}
          setShow={setShow}
        />
      </div>
      <div className={"zuruck_back_body"}>
        <button
          className={"zuruck_back"}
          onClick={() => router.push("/konto/main")}
        >
          <FontAwesomeIcon icon={faArrowLeft} className={"head-search-icon"} />{" "}
          {kontoPageTextData?.adress_back}
        </button>
      </div>
    </div>
  );
};

export default Bestellungen;
