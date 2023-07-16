// getData.js
export const getData = (blockchain, dispatch, fetchData) => {
  if (blockchain.account !== "" && blockchain.smartContract !== null) {
    dispatch(fetchData(blockchain.account));
  }
};
