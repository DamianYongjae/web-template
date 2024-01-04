interface Config {
  domain: string;
  apiUri: string;
  webUri: string;
}
const local: Config = {
  domain: "localhost",
  apiUri: "http://localhost:5000",
  webUri: "http://localhost:3000",
};
const development: Config = {
  domain: "",
  apiUri: "",
  webUri: "",
};
const production: Config = {
  domain: "usadisk.com",
  apiUri: "",
  webUri: "",
};
let config: Config;
switch (process.env.CONFIG_TYPE) {
  case "development":
    config = development;
    break;
  case "production":
    config = production;
    break;
  default:
    config = local;
    break;
}
export default config;
