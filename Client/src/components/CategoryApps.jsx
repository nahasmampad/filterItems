import React, { useEffect, useState } from "react";
import "./components.css";

const CategoryApps = ({ length, category, getData, product }) => {
  const [categorys, setCategorys] = useState([]);
  const [categoryName, setCateoryName] = useState("Category");
  const [show, setShow] = useState(true);

  useEffect(() => {
    setCategorys(category);
  }, []);

  const filterCat = async (item) => {
    const filerd = await categorys.filter((items, i) => {
      return items.name == item;
    });
    console.log("hai", filerd);
    setCateoryName(item);
    if (!filerd[0].subCatogory) {
      console.log("show0");
      setShow(false);
    } else {
      setCategorys(filerd[0]?.subCatogory);
    }
    getData(item);
  };

  return (
    <div className="Category">
      <div className="title">
        {categoryName} ({length})
      </div>
      {show && (
        <div className="category_box">
          {categorys.map((item, i) => {
            return (
              <div
                key={i}
                className="ctegory_item"
                onClick={() => filterCat(item.name)}
              >
                {item?.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CategoryApps;
