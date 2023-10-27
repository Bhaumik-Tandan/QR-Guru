function getWifiString(name, networkType, password) {
  let wifiString = `WIFI:S:${name};T:${networkType};`;

  if (networkType.toLowerCase() !== "none") {
    wifiString += `P:${password};`;
  }

  return wifiString;
}

export default getWifiString;
