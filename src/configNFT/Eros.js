import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import blockchainReducer from "../redux/blockchain/blockchainReducer";
import dataReducer from "../redux/data/dataReducer";

import imgEros from "../img/NFT/eros.webp";
const Eros = () => {
  const data = {
    CONTRACT_ADDRESS: "0xA8D2AD818868fEa0F6A9c6C535F7c748Df290A91",
    SCAN_LINK:
      "https://polygonscan.com/address/0xa8d2ad818868fea0f6a9c6c535f7c748df290a91",
    NETWORK: {
      NAME: "Polygon",
      SYMBOL: "Matic",
      ID: 137,
    },
    NFT_NAME: "ErosVr",
    SYMBOL: " Evr",
    MAX_SUPPLY: 50,
    WEI_COST: 33000000000000000000,
    DISPLAY_COST: 33,
    GAS_LIMIT: 285000,
    MARKETPLACE: "Opeansea",
    MARKETPLACE_LINK: "https://opensea.io/es/collection/erosvr-1",
    SHOW_BACKGROUND: true,
  };

  return data;
};

const rootReducer = combineReducers({
  blockchain: blockchainReducer,
  data: dataReducer,
});

const middleware = [thunk];
const composeEnhancers = compose(applyMiddleware(...middleware));

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers);
};
const erosStore = configureStore();

export { imgEros, erosStore, Eros };
