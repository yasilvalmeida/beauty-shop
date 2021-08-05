import { Card } from 'antd';
import Link from "next/link";
const MobileCard = ({title,data,classValue}) => {
  return (
      <Card style={{ width: 300 }} title={title} bordered={false} className={classValue}>
        {data?.length > 0 ? data?.map((e,i)=>{
          return (
            <div key={i} className="menu-subcategories">
              {/* <p>{e?.name}</p> */}
              <Link exact href={`/${e?.url || ""}`}>
                <a
                  href="#"
                  className={`hovered-top-link ${
                    route.pathname === e?.url ? "active-navbar" : ""
                  }`}
                  href={e?.url}
                  style={
                    route.pathname.substring(1) === e?.url
                      ? { WebkitTextStroke: "1px" }
                      : null
                  }
                >
                  {e?.name}
                </a>
              </Link>
              {/* <div className="subcategories-menu-body">
                  {e?.subCategories?.length > 0
                                  ? e?.subCategories?.map((subC) => (
                                      <Link href={"/a-z"} key={subC?.id}>
                                        <a href="#">
                                          {subC?.SubCategoryName}
                                        </a>
                                      </Link>
                                    ))
                  : null}
                </div> */}
            </div>
          );
      }):null}
      </Card>
  );
};

export default MobileCard;
