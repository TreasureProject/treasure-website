const UNITS = ["", "K", "M", "B", "T", "Q"];

function toFixed(num: number, fixed: number) {
  const formatted = parseFloat(num.toFixed(2));
  const re = new RegExp("^-?\\d+(?:.\\d{0," + (fixed || -1) + "})?");
  const numStr = formatted.toString().match(re);

  return numStr ? numStr[0] : formatted.toString();
}

export const formatPercent = (percentage: number) => {
  return toFixed(percentage * 100, 2) + "%";
};

export const abbreviatePrice = (number: number) => {
  let formatted_number = number;
  let unit_index = 0;

  while (Math.floor(formatted_number / 1000.0) >= 1) {
    // Jump up a 1000 bracket and round to 1 decimal
    formatted_number = Math.round(formatted_number / 100.0) / 10.0;
    unit_index += 1;
  }

  const unit = UNITS[unit_index] ?? "";

  return formatted_number.toFixed(1).replace(/\.0+$/, "") + unit;
};

export const getMagicPrice = async () => {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=magic&vs_currencies=usd"
  );

  const data = (await response.json()) as {
    magic: {
      usd: number;
    };
  };

  const price = toFixed(data.magic.usd, 2);

  return price;
};

export async function getTotalLockedAmount() {
  const res = await fetch(
    "https://api.thegraph.com/subgraphs/name/treasureproject/bridgeworld-stats",
    {
      body: JSON.stringify({
        query: `
          query getBWUAtlasLockedCount {
            atlasMineStat(id: "all-time") {
              magicDeposited
              magicWithdrawn
            }
          }
        `,
      }),
      method: "POST",
    }
  );

  const data = (await res.json()) as {
    data: {
      atlasMineStat: {
        magicDeposited: string;
        magicWithdrawn: string;
      };
    };
  };

  const lockedAmount =
    parseInt(data.data.atlasMineStat.magicDeposited) -
    parseInt(data.data.atlasMineStat.magicWithdrawn);

  return abbreviatePrice(lockedAmount / 1e18);
}

export async function getUniqueAddressCount() {
  const res = await fetch(
    "https://api.thegraph.com/subgraphs/name/treasureproject/magic-stats",
    {
      body: JSON.stringify({
        query: `
        query getUniqueAddressCount {
          magicStat(id: "all-time") {
            allAddressesCount
          }
        }
      `,
      }),
      method: "POST",
    }
  );

  const data = (await res.json()) as {
    data: {
      magicStat: {
        allAddressesCount: number;
      };
    };
  };

  return abbreviatePrice(data.data.magicStat.allAddressesCount);
}

export async function getTotalMarketplaceVolume() {
  const res = await fetch(
    "https://api.thegraph.com/subgraphs/name/treasureproject/marketplace",
    {
      body: JSON.stringify({
        query: `
        query getUniqueAddressCount {
          collections(first: 1000) {
            stats {
              volume
            }
          }
        }
      `,
      }),
      method: "POST",
    }
  );

  const data = (await res.json()) as {
    data: {
      collections: {
        stats: {
          volume: string;
        };
      }[];
    };
  };

  const totalVolume = data.data.collections.reduce(
    (acc, cur) => acc + Number(cur.stats.volume) / 1e18,
    0
  );

  return abbreviatePrice(totalVolume);
}

export async function getTotalSupply() {
  try {
    const res = await fetch(
      "https://api.arbiscan.io/api?module=stats&action=tokensupply&contractaddress=0x539bde0d7dbd336b79148aa742883198bbf60342"
    );

    const data: { status: string; message: string; result: string } =
      await res.json();

    return Number(data.result) / 1e18;
  } catch {
    return 0;
  }
}

export async function getPercentLocked() {
  const res = await fetch(
    "https://api.thegraph.com/subgraphs/name/treasureproject/bridgeworld",
    {
      body: '{"query":"{atlasMines{utilization}}","variables":null}',
      method: "POST",
    }
  );

  const {
    data: {
      atlasMines: [{ utilization }],
    },
  }: { data: { atlasMines: [{ utilization: string }] } } = await res.json();

  return formatPercent(Number(utilization) / 1e18);
}

export async function getUtilization() {
  try {
    const res = await fetch(
      "https://api.thegraph.com/subgraphs/name/treasureproject/bridgeworld",
      {
        body: '{"query":"{atlasMines{utilization}}","variables":null}',
        method: "POST",
      }
    );

    const {
      data: {
        atlasMines: [{ utilization }],
      },
    }: { data: { atlasMines: [{ utilization: string }] } } = await res.json();

    return 1 - Number(utilization) / 1e18;
  } catch {
    return 0;
  }
}
