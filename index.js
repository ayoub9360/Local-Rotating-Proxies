import ProxyChain from "proxy-chain"

//List of your proxies
const proxies = [
  "http://exemple:8000",
];

var int = 0

const server = new ProxyChain.Server({
  // Port where the server the server will listen. By default 8000.
  port: 8000,
  // Enables verbose logging
  verbose: true,
  prepareRequestFunction: ({
    request,
    username,
    password,
    hostname,
    port,
    isHttp,
  }) => {
    var upstreamProxyUrl;
    upstreamProxyUrl = proxies[int];
    int++
    if (int === proxies.length) int = 0
    console.log("Using proxy: " + upstreamProxyUrl);
    return { upstreamProxyUrl };
  },
});

server.listen(() => {
  console.log(`Router Proxy server is listening on port ${8000}`);
});
