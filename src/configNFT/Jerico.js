import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import blockchainReducer from "../redux/blockchain/blockchainReducer";
import dataReducer from "../redux/data/dataReducer";

export const Jerico = () => {
  const data = {
    CONTRACT_ADDRESS: "0x4f238E07c335c384fdB47f442a90E130408400a3",
    SCAN_LINK:
      "https://polygonscan.com/address/0x4f238e07c335c384fdb47f442a90e130408400a3",
    NETWORK: {
      NAME: "Polygon",
      SYMBOL: "Matic",
      ID: 137,
    },
    NFT_NAME: "JericoVr",
    SYMBOL: "Jvr",
    MAX_SUPPLY: 50,
    WEI_COST: 27000000000000000000,
    DISPLAY_COST: 27,
    GAS_LIMIT: 285000,
    MARKETPLACE: "Opeansea",
    MARKETPLACE_LINK: "https://opensea.io/es/collection/jericovr",
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

export const jericoStore = configureStore();
