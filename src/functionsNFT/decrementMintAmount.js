// decrementMintAmount.js
export const decrementMintAmount = (mintAmount, setMintAmount) => {
  let newMintAmount = mintAmount - 1;
  if (newMintAmount < 1) {
    newMintAmount = 1;
  }
  setMintAmount(newMintAmount);
};
