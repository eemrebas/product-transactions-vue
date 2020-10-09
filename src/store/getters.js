// we have just one parameter(state). we don't need to use brackets(ES6)
export const getTradeResult = state => {
  return {
    purchase: state.purchase,
    sale: state.sale,
    balance: state.balance
  };
};
