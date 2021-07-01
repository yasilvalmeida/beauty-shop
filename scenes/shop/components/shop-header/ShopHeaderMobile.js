import Image from 'next/image';
import {useSelector} from "react-redux";

const ShopHeaderMobile = () => {
  const news = useSelector(({ news }) => news);
  const  shopHeadOne = news.newsReports.find(n => n.position === 'ShopPageOne');
  return (
    <div className='shopHeader__container__mobile'>
      <div className='shopHeader__container__info'>
        <span className='shopHeader__container__info--label'>
          {shopHeadOne?.header}
        </span>
        <span className='shopHeader__container__info--title'>
          {shopHeadOne?.title}
        </span>
        <div className='shopHeader__container__images'>
          <Image
            width={941}
            height={624}
            layout='responsive'
            src={`${shopHeadOne?.images.url || '/productbotleft.png'}`}
          />
        </div>
        <span className='shopHeader__container__info--description'>
          {shopHeadOne?.text}
        </span>
      </div>
    </div>
  );
};

export default ShopHeaderMobile;
