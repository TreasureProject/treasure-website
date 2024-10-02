export async function getTotalSupply() {
  try {
    const res = await fetch(
      "https://api.arbiscan.io/api?module=stats&action=tokensupply&contractaddress=0x539bde0d7dbd336b79148aa742883198bbf60342",
    );

    const data: { status: string; message: string; result: string } =
      await res.json();

    return Number(data.result) / 1e18;
  } catch {
    return 0;
  }
}

export async function getUtilization() {
  try {
    const res = await fetch(
      "https://api.thegraph.com/subgraphs/name/treasureproject/bridgeworld",
      {
        body: '{"query":"{atlasMines{utilization}}","variables":null}',
        method: "POST",
      },
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
