import React from "react";

import Layout from "../layout/Layout";
import NFT from "./NFT";

import { imgGerico, Jerico, jericoStore } from "../../configNFT/Jerico";
import { imgGrigora, Grigora, grigoraStore } from "../../configNFT/Grigora";
import { imgSpartan, spartanStore, Spartan } from "../../configNFT/Spartan";
import { imgEros, erosStore, Eros } from "../../configNFT/Eros";

const Home = () => {
  return (
    <>
      <Layout>
        <div className="container-all-card">
          <NFT xConfig={Grigora()} imgNFT={imgGrigora} />
          <NFT xConfig={Jerico()} imgNFT={imgGerico} />
          <NFT xConfig={Spartan()} imgNFT={imgSpartan} />
          <NFT xConfig={Eros()} imgNFT={imgEros} />
        </div>
      </Layout>
    </>
  );
};

export default Home;
