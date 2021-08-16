import { Card } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";

const MobileCard = ({ title, data, classValue }) => {
  console.log("aux", data);
  const route = useRouter();
  return (
    <Card
      style={{ width: 300 }}
      title={title}
      bordered={false}
      className={classValue}
    >
      <div key={data?.id} className="menu-subcategories">
        <Link exact href={`/${data?.url}`}>
          <a
            className={`hovered-top-link ${
              route.pathname === data?.url ? "active-navbar" : ""
            }`}
            href={data?.url}
            style={
              route.pathname.substring(1) === data?.url
                ? { WebkitTextStroke: "1px" }
                : null
            }
          >
            {data?.name}
          </a>
        </Link>
        <div className="subcategories-menu-body">
          {data?.categories?.length > 0
            ? data?.categories?.map((subC) => (
                <Link href={`/shop?category=${subC?.id}`} key={subC?.id}>
                  <a href="#">{subC?.name}</a>
                </Link>
              ))
            : null}
        </div>
      </div>
    </Card>
  );
};

export default MobileCard;
