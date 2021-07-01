import { Card } from 'antd';
import Link from "next/link";
const MobileCard = ({title,data,classValue}) => {
  return (
      <Card style={{ width: 300 }} title={title} bordered={false} className={classValue}>
        {data.length > 0 ? data.map((e,i)=>{
          return(
            <div key={i} className="menu-subcategories">
                <p>{e.CategoryName}</p>
                <div className="subcategories-menu-body">
                  {e.subCategories.length > 0
                                  ? e.subCategories.map((subC) => (
                                      <Link href={"/a-z"} key={subC.id}>
                                        <a href="#">
                                          {subC.SubCategoryName}
                                        </a>
                                      </Link>
                                    ))
                  : null}
                </div>
            </div>
          )
      }):null}
      </Card>
  );
};

export default MobileCard;
