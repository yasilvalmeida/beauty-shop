import Link from "next/link"
const KontoContainerItem = ({item}) => {
    return (
        <Link href={`${item.title || ''}`}>
            <div className='kontoContainerItem__content' >
                <p className='kontoContainerItem__content--title'>{item.title}</p>
                <p className='kontoContainerItem__content--desc'>{item.text}</p>
            </div>
        </Link>
    );
};

export default KontoContainerItem;
