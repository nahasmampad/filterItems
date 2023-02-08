import React, { useEffect, useState } from "react";
import CategoryApps from "../../components/CategoryApps";
import ProductTable from "../../components/Table";
import category from "../../Data/Catogory";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [length, setLength] = useState("");

  const getProduct = async () => {
    const { data } = await axios.get("http://localhost:8000/product");
    setProduct(data);
    setLength(data.length);
  };

  const getData = async (pro) => {
    const filterData = await product.filter((item) => {
      if (item.category == pro || item.subCat == pro || item.type == pro) {
        return item;
      }
    });

    setProduct(filterData);
    setLength(filterData.length);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="Home">
      <div className="category">
        <CategoryApps length={length} category={category} getData={getData} product={product} />
      </div>
      <div className="product">
        <ProductTable product={product} />
      </div>
    </div>
  );
};

export default Home;
