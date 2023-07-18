import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import blockchainReducer from "../redux/blockchain/blockchainReducer";
import dataReducer from "../redux/data/dataReducer";

import imgSpartan from "../img/NFT/spartan.webp";
const Spartan = () => {
  const data = {
    CONTRACT_ADDRESS: "0x505429D38703Bc8844CeF5e682C5449aa26A361e",
    SCAN_LINK:
      "https://polygonscan.com/address/0x505429d38703bc8844cef5e682c5449aa26a361e",
    NETWORK: {
      NAME: "Polygon",
      SYMBOL: "Matic",
      ID: 137,
    },
    NFT_NAME: "Spartan",
    SYMBOL: "Spt",
    MAX_SUPPLY: 50,
    WEI_COST: 20000000000000000000,
    DISPLAY_COST: 20,
    GAS_LIMIT: 285000,
    MARKETPLACE: "Opeansea",
    MARKETPLACE_LINK: "https://opensea.io/es/collection/spartan-8",
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
const spartanStore = configureStore();

export { imgSpartan, spartanStore, Spartan };
