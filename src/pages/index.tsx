import type { GetStaticProps } from "next";
import { Client } from "twitter-api-sdk";
import { getPlaiceholder } from "plaiceholder";
import type { StaticProps } from "../routes/Home";
import { Home } from "../routes/Home";

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const client = new Client(process.env.TWITTER_API_TOKEN!);
  const { data } = await client.users.findUserByUsername(`saeris`, {
    "user.fields": [`profile_image_url`]
  });
  const url = data!.profile_image_url!.replace(`_normal`, ``);
  const { css, img } = await getPlaiceholder(url);

  return {
    props: {
      avatar: img,
      placeholder: css
    },
    revalidate: 86400 // Revalidate every 24hrs
  };
};

export default Home;
