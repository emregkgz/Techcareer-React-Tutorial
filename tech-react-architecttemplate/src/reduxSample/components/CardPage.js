import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCard, removeAllCard } from "../store/actions/card.action";

//Context içerisindeki sepetteki ürünlerin listeleneceği sayfa...
function CartPage() {
  var cards = useSelector((card) => card);
  var dispatch = useDispatch();

  const removeItem = (id) => {
    dispatch(deleteCard(id));
  };
  const removeAll = () => {
    dispatch(removeAllCard());
  };
  return (
    <>
      <button onClick={removeAll}>Empty Cart</button>
      <ul>
        {cards.map((item, index) => {
          return (
            <li key={index}>
              {item.name} - {item.price.toFixed(2)} * {item.quantity}
              <span style={{ fontWeight: "bold" }}>
                = {(item.price * item.quantity).toFixed(2)}
              </span>
              <button onClick={() => removeItem(item.id)}>Remove Item</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default CartPage;
