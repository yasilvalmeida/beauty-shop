import Image from 'next/image';
import {useRouter} from "next/router";

const Social = ({page}) => {
  const route = useRouter()
  return (
    <div className='social__container'>
      <div className='social__container__title'>
        <h4 >{route.query.id === "whishlist" ? "Teile deine wishlist direkt":"FOLGEN SIE DPA AUF"}</h4>
      </div>
      <div className='social__container__icons'>
        <div className='social__container__icons--icon'>
          <Image
            src='/facebook-icon.png'
            alt='facebook'
            width={page === "product-detail" ? 50:50}
            height={page === "product-detail" ? 50:50}
          />
        </div>
        <div className='social__container__icons--icon'>
          <Image
            src='/instagram-icon.png'
            alt='instagram'
            width={page === "product-detail" ? 50:50}
            height={page === "product-detail" ? 50:50}
          />
        </div>
        <div className='social__container__icons--icon'>
          <Image src='/twitter-icon.png' alt='twitter' width={page === "product-detail" ? 50:50} height={page === "product-detail" ? 50:50} />
        </div>
        <div className='social__container__icons--icon'>
          <Image
            src='/painterest-icon.png'
            alt='painterest '
            width={page === "product-detail" ? 50:50}
            height={page === "product-detail" ? 50:50}
          />
        </div>
      </div>
    </div>
  );
};

export default Social;
