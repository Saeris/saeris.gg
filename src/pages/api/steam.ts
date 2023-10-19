import type { NextApiHandler } from "next";

interface Data {
  game_count: number;
  games: Array<{
    appid: number;
    name: string;
    playtime_2weeks?: number;
    playtime_forever: number;
    img_icon_url: string;
    img_logo_url: string;
    playtime_windows_forever: number;
    playtime_mac_forever: number;
    playtime_linux_forever: number;
    has_community_visible_stats?: boolean;
  }>;
}

const base = `http://api.steampowered.com/`;
const getSteamGamesForUser = `IPlayerService/GetOwnedGames/v0001/`;
const steamid = process.env.STEAM_ID!;
const key = process.env.STEAM_API_KEY!;

const setParams = (
  url: URL,
  params: Record<string, boolean | number | string>
): void => {
  for (const [name, value] of Object.entries(params)) {
    if (typeof value !== `undefined`) {
      url.searchParams.set(name, value.toString());
    }
  }
};

const handler: NextApiHandler<Data> = async (_, res) => {
  const ep = new URL(getSteamGamesForUser, base);
  setParams(ep, {
    key,
    steamid,
    include_appinfo: true
  });
  const data: Data = await (await fetch(ep.href)).json();
  // eslint-disable-next-line
  console.log({ data });
  res.status(200).json(data);
};

export default handler;
