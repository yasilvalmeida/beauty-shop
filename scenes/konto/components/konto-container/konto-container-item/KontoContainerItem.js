import Link from "next/link";
const KontoContainerItem = ({ item }) => {
  return (
    <Link href={`${item?.url || ""}`}>
      <a href={`${item?.url || ""}`}>
        <div className="kontoContainerItem__content">
          <p className="kontoContainerItem__content--title">{item.title}</p>
          <p className="kontoContainerItem__content--desc">{item.text}</p>
        </div>
      </a>
    </Link>
  );
};

export default KontoContainerItem;
