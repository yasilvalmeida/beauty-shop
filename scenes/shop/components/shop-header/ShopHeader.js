import Image from 'next/image'
import {useSelector} from "react-redux";

const ShopHeader = () => {
  const news = useSelector(({ news }) => news);
  const  shopHeadOne = news.newsReports.find(n => n.position === 'ShopPageOne');
  return (
    <div className='shopHeader__container'>
      <div className='shopHeader__container__info'>
        <span className='shopHeader__container__info--label'>
          {/*{Exklusive nischenparfums für sie}*/}
          {shopHeadOne?.header}
        </span>
        <span className='shopHeader__container__info--title'>
          {shopHeadOne?.title}
        </span>
        <span className='shopHeader__container__info--description'>
          {shopHeadOne?.text}
        </span>
      </div>
      <div className='shopHeader__container__images'>
        <Image width={941} height={624} layout='intrinsic' src={`${shopHeadOne?.images.url || '/productbotleft.png'}`} />
      </div>
    </div>
  );
};

export default ShopHeader;
