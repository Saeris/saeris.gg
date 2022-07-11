import React from "react";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { SiGithub, SiTwitter, SiSteam } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import { Client } from "twitter-api-sdk";
import {
  About,
  Avatar,
  Cell,
  Container,
  List,
  Name,
  Profile,
  SocialLink,
  Title
} from "./elements";

export const getStaticProps: GetStaticProps<{ avatar: string }> = async () => {
  const client = new Client(process.env.TWITTER_API_TOKEN!);
  const { data } = await client.users.findUserByUsername(`saeris`, {
    "user.fields": [`profile_image_url`]
  });

  return {
    props: {
      avatar: data!.profile_image_url!.replace(`_normal`, ``)
    },
    revalidate: 86400 // Revalidate every 24hrs
  };
};

export const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  avatar
}) => (
  <Container>
    <Cell>
      <Profile>
        <Avatar src={avatar} />
        <About>
          <Name>Drake Costa</Name>
          <Title>Developer Experience Engineer</Title>
        </About>
      </Profile>
    </Cell>
    <List>
      <Cell as="li">
        <SocialLink to="//github.com/saeris">
          <SiGithub />
          {`GitHub`}
        </SocialLink>
      </Cell>
      <Cell as="li">
        <SocialLink to="//twitter.com/saeris">
          <SiTwitter />
          {`Twitter`}
        </SocialLink>
      </Cell>
      <Cell as="li">
        <SocialLink to="//instagram.com/saeris.io">
          <BsInstagram size={32} />
          {`Instagram`}
        </SocialLink>
      </Cell>
      <Cell as="li">
        <SocialLink to="//steamcommunity.com/id/ansrath/">
          <SiSteam />
          {`Steam`}
        </SocialLink>
      </Cell>
    </List>
  </Container>
);
