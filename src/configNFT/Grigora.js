import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import blockchainReducer from "../redux/blockchain/blockchainReducer";
import dataReducer from "../redux/data/dataReducer";

export const Grigora = () => {
  const data = {
    CONTRACT_ADDRESS: "0xd44a78BC1984C7ba3b4c50dcaf82e84f1677C08B",
    SCAN_LINK:
      "https://polygonscan.com/address/0xd44a78BC1984C7ba3b4c50dcaf82e84f1677C08B",
    NETWORK: {
      NAME: "Polygon",
      SYMBOL: "Matic",
      ID: 137,
    },
    NFT_NAME: "Grigora",
    SYMBOL: "Gg",
    MAX_SUPPLY: 50,
    WEI_COST: 13000000000000000000,
    DISPLAY_COST: 13,
    GAS_LIMIT: 285000,
    MARKETPLACE: "Opeansea",
    MARKETPLACE_LINK: "https://opensea.io/es/collection/grigora-1",
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

export const grigoraStore = configureStore();
