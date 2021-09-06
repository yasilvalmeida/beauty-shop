import AdressenTitle from "../../../../shareable/konto/AdressenTitle";
import AdressenElem from "../../../../shareable/konto/AdressenElem";
import AddressenForm from "./form/AddressenForm";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  getBillingAddress,
  getDeliveryAddress,
} from "../../../../services/actions/address";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Loader from "../../../../shareable/Loader";

const Adressen = () => {
  const dispatch = useDispatch();
  const billingData = useSelector((state) => state.address.billingAddresses);
  const deliveryData = useSelector((state) => state.address.deliveryAddresses);
  const { billingAddressesLoaded, deliveryAddressesLoaded } = useSelector(
    (state) => state.address
  );
  const { kontoPageTextData } = useSelector((state) => state.konto);
  const [editableData, setEditableData] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [appointment, setAppointment] = useState("");
  useEffect(() => {
    if (!showForm) {
      dispatch(getBillingAddress());
      dispatch(getDeliveryAddress());
    }
  }, [showForm]);
  const handleShow = (e) => {
    setShowForm(true);
    setAppointment(e);
  };

  const handleClose = () => {
    setShowForm(false);
  };
  const router = useRouter();

  return (
    <>
      {(billingAddressesLoaded || deliveryAddressesLoaded) && false ? (
        <Loader type={"component"} />
      ) : (
        <div className={"konto__adressen__container"}>
          <p className={"page_name"}>{kontoPageTextData?.address_header}</p>
          {!showForm ? (
            <>
              <div className={"konto__adressen__container__top"}>
                <AdressenTitle title={kontoPageTextData?.address_billing} />

                <div className={"konto__adressen__container__top__container"}>
                  {billingData?.map((e, i) => {
                    return (
                      <div key={i}>
                        <AdressenElem
                          e={e}
                          appointment={"billing"}
                          setEditable={setEditableData}
                          setAppointment={setAppointment}
                          setShowForm={setShowForm}
                        />
                      </div>
                    );
                  })}
                  <div className={"konto__adressen__container__top__add"}>
                    <div
                      className={"konto__adressen__container__top__add__elem"}
                      onClick={() => handleShow("billing")}
                    >
                      <p>+</p>
                    </div>
                    <p
                      className={"konto__adressen__container__top__add__link"}
                      onClick={handleShow}
                    >
                      {kontoPageTextData?.address_add}
                    </p>
                  </div>
                </div>
              </div>
              <div className={"konto__adressen__container__bottom"}>
                <AdressenTitle title={kontoPageTextData?.address_delivery} />
                <div
                  className={"konto__adressen__container__top__containerbot"}
                >
                  {deliveryData?.map((e, i) => {
                    return (
                      <div key={i}>
                        <AdressenElem
                          e={e}
                          appointment={"delivery"}
                          setEditable={setEditableData}
                          setAppointment={setAppointment}
                          setShowForm={setShowForm}
                        />
                      </div>
                    );
                  })}
                  <div className={"konto__adressen__container__top__add"}>
                    <div
                      className={"konto__adressen__container__top__add__elem"}
                      onClick={() => handleShow("delivery")}
                    >
                      <p>+</p>
                    </div>
                    <p
                      className={"konto__adressen__container__top__add__link"}
                      onClick={handleShow}
                    >
                      {kontoPageTextData?.add}
                    </p>
                  </div>
                </div>
              </div>
              <div className={"zuruck_back_body"}>
                <button
                  className={"zuruck_back"}
                  onClick={() => router.push("/konto/main")}
                >
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className={"head-search-icon"}
                  />{" "}
                  {kontoPageTextData?.adress_back}
                </button>
              </div>
            </>
          ) : (
            <AddressenForm
              back={handleClose}
              appointment={appointment}
              editable={editableData}
              setShow={handleClose}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Adressen;
