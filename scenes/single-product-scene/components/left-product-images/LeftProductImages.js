import {useState, useEffect} from "react";
import {useRouter} from "next/router";
import {useSelector} from "react-redux";
import Social from "../../../../shareable/social/Social";
import moment from "moment";
import PictureModal from "../picture-modal/PictureModal";

const LeftProductImages = ({elem}) => {
    const {singleProductVariantId} = useSelector(
        (state) => state.singleProdPage
    );

    let defaultVariant = [];
    if (elem.variants_of_a_products.length === 1) {
        defaultVariant = elem.variants_of_a_products;
    } else {
        defaultVariant = elem.variants_of_a_products.filter((item) => {
            return item.main === true;
        });
    }


    let [productVariant, setProductVariant] = useState(defaultVariant);

    useEffect(() => {
        if (singleProductVariantId !== "") {
            setProductVariant(
                elem.variants_of_a_products.filter((item) => {
                    return item.id === singleProductVariantId;
                })
            );
        }
    }, [singleProductVariantId]);

    const router = useRouter();
    const [image, setImage] = useState(elem?.images[0]?.url);
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <>
            <div className={"about-product-left-img-body-all"}>
                <div className={"about-product-left-img-body"}>
          <span className={"go-back"} onClick={() => router.back()}>
            Zuruck
          </span>
                    <div className={"about-product-main-img-body"}>
                        <div className={"product-page-image-head"}>
                            <img
                                src={productVariant[0]?.images[0]?.url ? productVariant[0]?.images[0]?.url : image}
                                alt="product"
                                className={"main-pic"}
                                onClick={() => {
                                    setIsModalVisible(true);
                                }}
                            />
                            <PictureModal
                                setIsmodalVisible={setIsModalVisible}
                                isModalVisible={isModalVisible}
                                dataImages={
                                    productVariant[0]?.images?.length > 0
                                        ? productVariant[0]?.images
                                        : elem?.images
                                }
                            />
                            <p
                                className={"new-icon"}
                                style={
                                    elem?.New_Date_Limit < moment(new Date()).format("YYYY-MM-DD")
                                        ? {backgroundColor: "transparent"}
                                        : {backgroundColor: "black"}
                                }
                            >
                                new
                            </p>
                            {elem?.approved_by_DPAB && <img
                                src="/15-layers.png"
                                alt="15 layers"
                                className={"circled-txt"}
                                onClick={() => router.push("/aboutthree")}
                            />}
                        </div>
                        <p
                            className={"headtxt-one"}
                            style={elem?.clean_product ? {opacity: "1"} : {opacity: "0"}}
                        >
                            Clean Product
                        </p>
                        <p
                            className={"headtxt-two"}
                            style={
                                elem?.limited_edition ? {opacity: "1"} : {opacity: "0"}
                            }
                        >
                            Limited Edition
                        </p>
                    </div>
                    <div className={"bottom_three-images-body"}>
                        {productVariant[0]?.images.filter((item) => {
                            return item.id !== productVariant[0]?.images[0]?.id;
                        }).map((e, i) => {
                            return (
                                <div className={"bottom-three-images"} key={i}>
                                    <img
                                        src={`${e?.url}`}
                                        alt="product"
                                        onClick={() => setImage(e?.url)}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <Social page={"product-detail"}/>
            </div>
        </>
    );
};

export default LeftProductImages;
