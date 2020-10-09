// we will use this function when we're gonna set purchase and sale
export const updateTradeResult = (state, payload) => {
  if (payload.count) {
    state.purchase += parseFloat(payload.purchase) * parseInt(payload.count);
    state.sale += parseFloat(payload.sale) * parseInt(payload.count);
  } else {
    state.purchase += parseFloat(payload.purchase);
    state.sale += parseFloat(payload.sale);
  }

  state.balance = parseFloat(state.sale) - parseFloat(state.purchase);
};

// export const salePrice = (state, payload) => {
//   state.salePrice = payload.productSalePrice;
//   console.log(state.salePrice);
// }
