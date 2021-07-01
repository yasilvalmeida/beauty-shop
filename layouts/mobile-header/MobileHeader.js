import {useEffect, useState} from 'react';
import {MenuOutlined, SearchOutlined} from '@ant-design/icons';
import {Drawer, Input} from 'antd';
import MobileCard from './MobileCard';
import MobileMenuFooter from './MobileMenuFooter';
import Logo from '../logo/Logo';
import Image from 'next/image';
import CartSidebar from "../cartSidebar/CartSidebar";
import {useDispatch, useSelector} from 'react-redux';
import Link from "next/link";
import {getBasketData} from "../../services/actions/basket";

const MobileHeader = () => {
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const navlinks = useSelector(state => state.navbar.navList)

    const showDrawer = () => {
        setVisible(true);
    };
    const showDrawerCart = () => {
        setVisible2(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    const onCloseCart = () => {
        setVisible2(false);
    };

    const openSerach = () => {
        setShowSearch(!showSearch)
    }
    useEffect(() => {
        if (visible2) {
            dispatch(getBasketData())
        }
    }, [visible2])

    const prefix = (
        <SearchOutlined
            style={{
                fontSize: 26,
                color: '#7b7b7b',
            }}
        />
    );

    return (
        <div className='mobileHeader'>
            <div className='mobileHeader__container'>
                <div className='mobileHeader__container__icon--menu'>
                    <MenuOutlined onClick={showDrawer}/>
                </div>
                <Logo/>
                <div className='mobileHeader__container__image--cart'>
                    <SearchOutlined onClick={openSerach}/>
                    <div onClick={showDrawerCart}>
                        <Image src='/bag.svg' width={30} height={30}/>
                    </div>
                </div>
            </div>
            <div className={showSearch ? 'mobileHeader__search__container' : 'hide'}>
                <Input
                    placeholder='suche'
                    className='mobileHeader__search__container--input'
                    prefix={prefix}
                />
            </div>
            <Drawer
                title={<Logo/>}
                className='mobileHeader__drawer__container'
                placement='left'
                closable={true}
                width={315}
                onClose={onClose}
                visible={visible}
                keyboard={true}
                maskClosable={true}
                // onBlur={onClose}
            >
                {navlinks?.map((e, i) => {
                    return (
                        <MobileCard title={<Link href={e?.item_name.toLowerCase()}>{e?.item_name}</Link>}
                                    data={e.categories} key={i}
                                    classValue={e.categories.length === 0 && "without-body"}/>
                    )
                })}
                <MobileMenuFooter/>
            </Drawer>
            <CartSidebar onClose={onCloseCart} visible={visible2}/>
        </div>
    );
};

export default MobileHeader;
