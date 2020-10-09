import Axios from "axios";

// send purchase and sale to firebase
export const setTradeResult = ({ state, commit }, payload) => {
  /* first, we'll update the state using mutations */
  commit("updateTradeResult", payload);

  /* send purchase and sale to firebase */
  let tradeData = {
    purchase: state.purchase,
    sale: state.sale
  };
  Axios.put("/trade-result.json", tradeData).then(response => {});
};

// get purchase and sale from firebase
export const getTradeResult = ({ commit }) => {
  Axios.get("/trade-result.json").then(response => {
    commit("updateTradeResult", response.data);
  });
};
