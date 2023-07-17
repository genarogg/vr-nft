import React from "react";

import Layout from "../layout/Layout";
import NFT from "./NFT";

import { Jerico, jericoStore } from "../../configNFT/Jerico";

import imgNFT5 from "../../img/NFT/NFT5.webp";
import imgBG3 from "../../img/bg3.webp";

import { Provider } from "react-redux";

const Home = () => {
  return (
    <>
      <Layout>
        <div className="container-all-card">
          <Provider store={jericoStore}>
            <NFT xConfig={Jerico()} imgBackground={imgBG3} imgNFT={imgNFT5} />
          </Provider>
          
        </div>
      </Layout>
    </>
  );
};

export default Home;
