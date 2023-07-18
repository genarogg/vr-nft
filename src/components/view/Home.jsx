import React from "react";

import Layout from "../layout/Layout";
import NFT from "./NFT";

import { imgGerico, Jerico, jericoStore } from "../../configNFT/Jerico";
import { imgGrigora, Grigora, grigoraStore } from "../../configNFT/Grigora";
import { imgSpartan, spartanStore, Spartan } from "../../configNFT/Spartan";
import { imgEros, erosStore, Eros } from "../../configNFT/Eros";

import { Provider } from "react-redux";

const Home = () => {
  return (
    <>
      <Layout>
        <div className="container-all-card">
          <Provider store={grigoraStore}>
            <NFT xConfig={Grigora()} imgNFT={imgGrigora} />
          </Provider>
          <Provider store={jericoStore}>
            <NFT xConfig={Jerico()} imgNFT={imgGerico} />
          </Provider>

          <Provider store={spartanStore}>
            <NFT xConfig={Spartan()} imgNFT={imgSpartan} />
          </Provider>
          <Provider store={erosStore}>
            <NFT xConfig={Eros()} imgNFT={imgEros} />
          </Provider>
        </div>
      </Layout>
    </>
  );
};

export default Home;
