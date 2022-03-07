import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UseEffectHook() {
  const url = "https://bhuwans-backend.herokuapp.com/api/v1/products";
  const [list, setList] = useState([]);
  const [data, setData] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [inputText, setInputText] = useState("");
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await axios.get(url);
      console.log("products:", products.data);
      setList(products.data);
    };
    fetchProducts();
  }, [url]);
  const handleChange = () => {
    const tempList = list.filter((item) => item.name.includes(inputText));
    setFilterList(tempList);
  };
  useEffect(() => {
    if (inputText) {
      setData(filterList);
    } else {
      setData(list);
    }
  }, [inputText]);

  return (
    <div>
      <h1>UseEffect Demo:</h1>
      <input
        type="text"
        value={inputText}
        onChange={(event) => {
          setInputText(event.target.value);
          handleChange();
        }}
      ></input>
      {data.length ? (
        data.map((item, index) => {
          return <p key={index}>{item.name}</p>;
        })
      ) : (
        <p>comming...</p>
      )}
    </div>
  );
}
