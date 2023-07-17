import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
import { claimNFTs } from "../../functionsNFT/claimNFTs";

import { decrementMintAmount } from "../../functionsNFT/decrementMintAmount";
import { incrementMintAmount } from "../../functionsNFT/incrementMintAmount";
import { getData } from "../../functionsNFT/getData";
import Img from "../nano/Img";
import A from "../nano/A";

/* import img */
import imgNFT5 from "../../img/NFT/NFT5.webp";
import imgBG3 from "../../img/bg3.webp";
import imgshart from "../../img/shart.webp";
/* import Inicio from "../../consultas/Inicio" */

const NFT = ({ xConfig, xAabis }) => {
  const truncate = (input, len) =>
    input.length > len ? `${input.substring(0, len)}...` : input;

  const generateConnetion = connect(xConfig, xAabis);
  const dispatch = useDispatch();
  //@ts-ignore
  const blockchain = useSelector((state) => state.blockchain);
  //@ts-ignore
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  useEffect(() => {
    SET_CONFIG(xConfig);
  }, []);

  useEffect(() => {
    if (blockchain?.account) {
      getData(blockchain, dispatch, fetchData);
    }
  }, [blockchain?.account]);

  return (
    <>
      <div className="master">
        <div className="cardContainer">
          <Img src={imgBG3} type="bg" css="bgCard">
            <div className="containerImg">
              <Img src={imgNFT5} type="img"></Img>
            </div>

            <div className="info">
              <div className="titulo">
                <h2>
                  <Img src={imgshart} type="bg"></Img>
                  {data.totalSupply} / {CONFIG.MAX_SUPPLY}
                </h2>
              </div>

              <div className="contratoAddress">
                <A to={CONFIG.SCAN_LINK} type="a">
                  {/* {truncate(CONFIG.CONTRACT_ADDRESS, 15)} */}
                  ver en polygon-scan
                </A>
              </div>
              {/*  */}
              {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY /* true */ ? (
                <>
                  <div className="ventaFinalizada">
                    <h2>
                      La oportunidad de adquirir productos de MinteoJerico ha
                      finalizado.
                    </h2>
                    <p>
                      You can still find {CONFIG.NFT_NAME} on{" "}
                      <A to={CONFIG.MARKETPLACE_LINK} type="a">
                        {CONFIG.MARKETPLACE}
                      </A>
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="gasContainer">
                    <div className="title">
                      <h2>
                        1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                        {CONFIG.NETWORK.SYMBOL}.
                      </h2>
                      <p>Excluding gas fees.</p>
                    </div>
                    {blockchain.account === "" ||
                    blockchain.smartContract === null /* false */ ? (
                      <div className="connetContainer">
                        <p>Connect to the {CONFIG.NETWORK.NAME} network</p>
                        <button
                          className="connet"
                          onClick={(e) => {
                            e.preventDefault();
                            //@ts-ignore
                            dispatch(generateConnetion);
                            /* detallito */
                            getData(blockchain, dispatch, fetchData);
                          }}
                        >
                          CONNECT
                        </button>
                        {blockchain.errorMsg !== "" ? (
                          <p>{blockchain.errorMsg}</p>
                        ) : null}
                      </div>
                    ) : (
                      <>
                        <div className="compraContainer">
                          <p className="feedback">{feedback}</p>
                          <div className="containerMasoMenos">
                            <button
                              //@ts-ignore
                              disabled={claimingNft ? 1 : 0}
                              onClick={(e) => {
                                e.preventDefault();
                                decrementMintAmount(mintAmount, setMintAmount);
                              }}
                            >
                              -
                            </button>
                            <p>{mintAmount}</p>
                            <button
                              //@ts-ignore
                              disabled={claimingNft ? 1 : 0}
                              onClick={(e) => {
                                e.preventDefault();
                                incrementMintAmount(mintAmount, setMintAmount);
                              }}
                            >
                              +
                            </button>
                          </div>
                          <div>
                            <button
                              className="btnComprar"
                              //@ts-ignore
                              disabled={claimingNft ? 1 : 0}
                              onClick={(e) => {
                                e.preventDefault();
                                claimNFTs(
                                  blockchain,
                                  CONFIG,
                                  mintAmount,
                                  setFeedback,
                                  setClaimingNft,
                                  dispatch,
                                  fetchData
                                );
                                getData(blockchain, dispatch, fetchData);
                              }}
                            >
                              {claimingNft ? "BUSY" : "BUY"}
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </>
              )}
            </div>
          </Img>
        </div>
        <div className="card-back"></div>
      </div>
    </>
  );
};

export default NFT;
