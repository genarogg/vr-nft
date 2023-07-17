export const getConfig = async (SET_CONFIG, xConfig) => {
/*   const configResponse = await fetch("/config/config.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const config = await configResponse.json(); */

  SET_CONFIG(xConfig);
};
