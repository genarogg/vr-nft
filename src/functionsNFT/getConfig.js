// getConfig.js
/* export const getConfig = async (SET_CONFIG) => {
  const configResponse = await fetch("/config/config.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const config = await configResponse.json();
  SET_CONFIG(config);
};
 */

import { Aconfig } from "../configNFT/Aconfig"

export const getConfig = SET_CONFIG => {
  SET_CONFIG(Aconfig())
}
