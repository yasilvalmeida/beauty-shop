import KontoContainerItem from './konto-container-item/KontoContainerItem'
import {useSelector} from "react-redux";


const KontoContainer = () => {

    const kontoData = [
        {
            id: 1,
            title: 'adressen',
            text: 'Lorem ipsum dolor sit amet, con'
        },
        {
            id: 2,
            title: 'nutzerdaten',
            text: 'Lorem ipsum dolor sit amet, con'
        },
        {
            id: 3,
            title: 'bestellungen',
            text: 'Lorem ipsum dolor sit amet, con'
        },
        {
            id: 4,
            title: 'whishlist',
            text: 'Lorem ipsum dolor sit amet, con'
        },
        {
            id: 5,
            title: 'newsletter',
            text: 'Lorem ipsum dolor sit amet, con'
        },
        {
            id: 6,
            title: 'lesezeichen',
            text: 'Lorem ipsum dolor sit amet, con'
        },
    ]
    const kontoMainData = useSelector(state => state.konto.mainBoxes)
  return (
    <div className='kontoContainer'>
      {kontoMainData?.map((item) => (
        <KontoContainerItem key={item.id} item={item}  />
      ))}
    </div>
  )
}

export default KontoContainer
