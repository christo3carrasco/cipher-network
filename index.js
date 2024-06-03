const ganache = require("ganache");

const options = {
  database: { dbPath: "db" },
  chain: { networkId: 5777 },
  wallet: { deterministic: true },
  wallet: { mnemonic: "1s4b3l6chr15" },
};

const server = ganache.server(options);
const PORT = 8545;

server.listen(PORT, async (err) => {
  if (err) throw err;
  console.log(`ethereum network listening on port ${server.address().port}...`);

  const provider = server.provider;
  const accounts = await provider.request({
    method: "eth_accounts",
    params: [],
  });
});
