import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UseEffectHook() {
  const url = "https://bhuwans-backend.herokuapp.com/api/v1/products";
  const [list, setList] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await axios.get(url);
      console.log("products:", products.data);
      setList(products.data);
    };
    fetchProducts();
  }, [url]);
  return (
    <div>
      <h1>UseEffect Demo:</h1>
      {list.length ? (
        list.map((item, index) => {
          return <p key={index}>{item.name}</p>;
        })
      ) : (
        <p>comming...</p>
      )}
    </div>
  );
}
