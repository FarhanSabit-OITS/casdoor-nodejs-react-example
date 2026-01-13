// const config = {
//   serverUrl: "https://door.casdoor.com",
//   clientId: "014ae4bd048734ca2dea",
//   organizationName: "casbin",
//   appName: "app-casnode",
//   redirectPath: "/callback",
// };

export const config = {
  serverUrl: "https://door.casdoor.com",
  clientId: "014ae4bd048734ca2dea",
  organizationName: "casbin",
  appName: "app-casnode",
  redirectPath: window.location.origin + '/callback',
  jwtPublicKey: "-----BEGIN PUBLIC KEY--...",
  casdoorEndpoint: "http://localhost:8000"
};