import React from "react";
import type { NextPage } from "next";
import { HiQrCode } from "react-icons/hi2";
import { config } from "../config";
import { Stack, Profile, Links, IconLink } from "../components";

const Home: NextPage = () => {
  const { name, title, links } = config;
  return (
    <>
      <Stack>
        <Profile name={name} title={title} />
        <Links links={links} />
      </Stack>
      <IconLink title="View QR Code" href="/qr">
        <HiQrCode />
      </IconLink>
    </>
  );
};

export default Home;
