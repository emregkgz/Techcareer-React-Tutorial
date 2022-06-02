import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCard, decreaseCard } from "../store/actions/card.action";

function ProductList() {
  var dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const goToDetail = (id) => {
    navigate(`/urunler/${id}`);
  };

  const addToCart = (item) => {
    dispatch(addToCard(item));
  };

  const decreaseToCart = (item) => {
    dispatch(decreaseCard(item));
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Unit Price</td>
            <td>Detail </td>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((item, key) => {
              return (
                <tr key={key}>
                  <td>{item.id}</td>
                  <td>
                    <Link to={"/urunler/" + item.id}>{item.name}</Link>
                  </td>
                  <td>{item.unitPrice}</td>
                  <td>
                    <button onClick={() => goToDetail(item.id)}>
                      Go To Detail
                    </button>
                  </td>
                  <td>
                    <button onClick={() => decreaseToCart(item)}> - </button>

                    <button onClick={() => addToCart(item)}> + </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default ProductList;
