import React from "react";
import type { NextPage } from "next";
import type { IGetPlaiceholderReturn } from "plaiceholder";
import { SiGithub, SiTwitter, SiSteam } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";
import {
  About,
  Cell,
  Container,
  List,
  Name,
  Profile,
  SocialLink,
  Title
} from "./elements";
import { Avatar } from "../../components/Avatar";
import { Waves } from "../../components/Waves";

export interface StaticProps {
  avatar: IGetPlaiceholderReturn["img"];
  placeholder: IGetPlaiceholderReturn["css"];
}

export const Home: NextPage<StaticProps> = ({ avatar, placeholder }) => (
  <>
    <Waves />
    <Container>
      <Cell>
        <Profile>
          <Avatar {...avatar} width={400} placeholder={placeholder} />
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
  </>
);
