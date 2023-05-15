import { HiGlobeAmericas } from "react-icons/hi2";
import {
  SiLinkedin,
  SiGmail,
  SiInstagram,
  SiTwitter,
  SiGithub,
  SiSteam
} from "react-icons/si";
import type { SiteConfig } from "./types";

export const config: SiteConfig = {
  name: `Drake Costa`,
  title: `Engineering • Design • Photography`,
  links: [
    { Icon: SiGithub, url: `//github.com/saeris`, label: `Github` },
    { Icon: SiTwitter, url: `//twitter.com/saeris`, label: `Twitter` },
    {
      Icon: SiInstagram,
      url: `//www.instagram.com/saeris.gg`,
      label: `Instagram`
    },
    { Icon: SiSteam, url: `//steamcommunity.com/id/ansrath`, label: `Steam` },
    {
      Icon: SiLinkedin,
      url: `//www.linkedin.com/in/saeris`,
      label: `LinkedIn`
    },
    { Icon: HiGlobeAmericas, url: `//saeris.io`, label: `Resume` },
    { Icon: SiGmail, url: `mailto:yo@saer.is`, label: `Email` }
  ]
};
