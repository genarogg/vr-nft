import React from "react";

/* import DemoNftCara1 from "../../../../vr-nft-gatsby/src/componets/viewer/DemoNftCara1";
import DemoNftCara2 from "./DemoNftCara2";
import DemoNftCara3 from "./DemoNftCara3"; */
import Layout from "../layout/Layout";
import NFT from "./NFT";
import { Aconfig } from "../../configNFT/Aconfig";
import { Aabis } from "../../configNFT/Aabi";

const Home = () => {
  return (
    <>
      <Layout>
        <div className="container-all-card">
          <NFT xConfig={Aconfig()} xAabis={Aabis()} />
          {/*      <NFT xConfig={Aconfig()} xAabis={Aabis()} />
            <NFT xConfig={Aconfig()} xAabis={Aabis()} />
          <NFT xConfig={Aconfig()} xAabis={Aabis()} /> */}
        </div>
        {/* <div>t
          <div>
          
            <div>
              <p>
                Please make sure you are connected to the right network (
                {CONFIG.NETWORK.NAME} Mainnet) and the correct address.
                Please note: Once you make the purchase, you cannot undo this
                action.
              </p>
              <p>
                We have set the gas limit to {CONFIG.GAS_LIMIT} for the
                contract to successfully mint your NFT. We recommend that you
                don't lower the gas limit.
              </p>
            </div>
          </div>
        </div> */}
      </Layout>
    </>
  );
};

export default Home;
