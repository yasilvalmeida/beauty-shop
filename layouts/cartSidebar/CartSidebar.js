import { Drawer, Button, Radio, Space } from 'antd';
import CartSidebarProduct from "../../shareable/cart-sidebar/product/CartSideBarProduct";
import {useState,useEffect} from "react"
import CartSidebarFooter from "../../shareable/cart-sidebar/footer/CartSidebarFooter";
import {useSelector} from "react-redux";
const CartSidebar = ({visible,onClose}) => {
        const [products,setProducts] = useState([1,2])
        const productsData = useSelector(state=>state.basket.products)
        const [cartWidth,setCartWidth] = useState(488)
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });

        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }

            window.addEventListener("resize", handleResize);

            handleResize();

            return () => window.removeEventListener("resize", handleResize);
        }, []);


        useEffect(()=>{
            if(windowSize.width <= 590 && windowSize.width > 500){
                setCartWidth(400)
            }else if(windowSize.width <= 500 && windowSize.width > 415){
                setCartWidth(350)
            }else if(windowSize.width <= 415 && windowSize.width > 370){
                setCartWidth(300)
            }else if(windowSize.width <= 370 ){
                setCartWidth(270)
            }else {
                setCartWidth(488)
            }
        },[windowSize])
        return (
            <>
                <Drawer
                    className = "shopping__cart__drawer"
                    title={`Warenkorb (${productsData.products ? productsData.products.length : 0 } Produkt)`}
                    placement={"right"}
                    closable={true}
                    onClose={onClose}
                    visible={visible}
                    keyboard={true}
                    maskClosable={true}
                    width={cartWidth}
                >
                    <div className={"cart__sidebar__products"}>
                        {productsData?.products?.map((e,i)=>{
                            return(
                                <div key={i}>
                                    <CartSidebarProduct key={i} elem={e}/>
                                </div>
                            )
                        })}
                    </div>
                    <CartSidebarFooter cost={productsData?.cost} data={productsData.products}/>
                </Drawer>
            </>
        );
}

export default CartSidebar