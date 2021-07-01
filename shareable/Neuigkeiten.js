import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from "next/router";

const Neuigkeiten = ({
  background,
  color,
  paddingTop,
  paddingBottom,
  btntext,
  width,
  padd,
  neuigkeiten,
  neuigkeitenSecond
}) => {
  const router = useRouter()
  return (
    <>
      <div
        className={'prodbotbodall'}
        style={{
          backgroundColor: background,
          paddingTop: paddingTop,
          paddingBottom: paddingBottom,
        }}
      >
        <div className={'first-product-bottom-body'}>
          <div className={'col-lg-6 product-bottom-left d-flex'}>
            <div className={'prod-bot-left-img'}>
              <h2 style={{ color: color }}>NEUIGKEITEN</h2>
              <div onClick={()=>router.push(`${neuigkeiten?.url}`)} style={{cursor:"pointer"}}>
                <img
                    src={neuigkeiten?.images?.url || '/productbotleft.png'}
                    layout='responsive'

                />
              </div>
            </div>
            <div className={'prod-bod-left-txt'}>
              <p style={{ color: color }}>{neuigkeiten?.header}</p>
              <h2 style={{ color: color,cursor:"pointer" }} onClick={()=>router.push(`${neuigkeiten?.url}`)} >
                {neuigkeiten?.title}
              </h2>
              <span style={{ color: color }}>
                {neuigkeiten?.text}
              </span>
              <Link href={neuigkeiten?.url || ''}>
                <a href='#'>{neuigkeiten?.link_text}</a>
              </Link>
            </div>
          </div>
          <div className={"product-bottom-middle"}></div>
          <div className={' product-bottom-right'}>
            <p style={{ color: color }}>{neuigkeitenSecond?.header}</p>
            <h2
                onClick={
                  ()=>router.push(`${neuigkeitenSecond?.url}`)
                }
                style={{cursor:"pointer",color: color }}
            >
              {neuigkeitenSecond?.title}
            </h2>
            <span style={{ color: color }}>
              {neuigkeitenSecond?.text}
            </span>
            <div className={'prod-bot-right-img'}  onClick={()=>router.push(`${neuigkeitenSecond?.url}`)} style={{cursor:"pointer"}}>
              <img
                src={neuigkeitenSecond?.images?.url || '/productbotright.png'}
              />
            </div>
            <Link href={neuigkeitenSecond?.url || ''}>
              <a href='#'>{neuigkeitenSecond?.link_text}</a>
            </Link>
          </div>
        </div>
        <button
          className={'filter-bot-btn'}
          onClick={()=>router.push("/magazin")}
          style={{
            color: background,
            backgroundColor: color,
            width: width,
            padding: padd,
          }}
        >
          {btntext}{' '}
        </button>
      </div>
    </>
  );
};

export default Neuigkeiten;
