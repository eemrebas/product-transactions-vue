import Axios from "axios";
import { router } from "../../router";

const state = {
  products: [],
};

const getters = {
  getProducts(state) {
    return state.products;
  },
  getProduct(state) {
    return id =>
      state.products.filter(element => {
        return element.id == id;
      });
  }
};

const mutations = {
  updateProducts(state, product) {
    state.products.push(product);
  }
};

const actions = {
  initApp({ commit }) {
    /* get data from database when the page is created */
    Axios.get("/products.json").then(response => {
      let data = response.data;
      for (let key in data) {
        data[key].id = key;
        commit("updateProducts", data[key]);
      }
    });
  },

  saveProduct({ dispatch, commit }, payload) {
    Axios.post("/products.json", payload)
      .then(response => {
        /* each product will have an ID. this ID comes with the response (ID equals to response.data.name) */
        payload.id = response.data.name;
        commit("updateProducts", payload);


        /* update purchase, sale and balance variables */
        let tradeResult = {
          purchase: payload.price,
          sale: 0,
          count: payload.count
        };
        dispatch("setTradeResult", tradeResult);

        router.replace("/");
      })
      .catch(err => console.log(err));
  },

  sellProduct({ state, commit, dispatch }, payload) {
    /* pass by referance */
    let product = state.products.filter(element => {
      return element.id == payload.id;
    });

    if (product) {
      let totalCount = product[0].count - payload.count;

      Axios.patch("/products/" + payload.id + ".json", {
        count: totalCount
      }).then(response => {
        product[0].count = totalCount;

        let productPurchasePrice = parseInt(product[0].price, 10);
        let productRaisePrice = productPurchasePrice * (1 / 10);
        let productSalePrice = productPurchasePrice + productRaisePrice;

        console.log(this.productSalePrice2);

        let tradeResult = {
          purchase: 0,
          sale: productSalePrice,
          count: payload.count
        };
        dispatch("setTradeResult", tradeResult);

        router.replace("/");
      });
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
