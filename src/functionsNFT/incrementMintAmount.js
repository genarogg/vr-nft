// incrementMintAmount.js
export const incrementMintAmount = (mintAmount, setMintAmount) => {
  let newMintAmount = mintAmount + 1;
  if (newMintAmount > 10) {
    newMintAmount = 10;
  }
  setMintAmount(newMintAmount);
};
