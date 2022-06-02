export const addToCard = (payload) => {
  return {
    type: "ADD_CARD",
    payload: payload,
  };
};
export const decreaseCard = (payload) => {
  return {
    type: "DECREASE_CARD",
    payload: payload,
  };
};
export const deleteCard = (payload) => {
  return {
    type: "DELETE_CARD",
    payload: payload,
  };
};
export const removeAllCard = (payload) => {
  return {
    type: "REMOVEALL_CARD",
    payload: payload,
  };
};
