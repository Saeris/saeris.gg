import {
  SiLinkedin,
  SiGmail,
  SiInstagram,
  SiTwitter,
  SiGithub,
  SiSteam
} from "react-icons/si";
import { MdPermContactCalendar, MdGamepad } from "react-icons/md";

import type { SiteConfig } from "./types";

export const config: SiteConfig = {
  name: `Drake Costa`,
  title: `Engineering • Design • Photography`,
  links: [
    { Icon: MdGamepad, url: `//worbik.saeris.io`, label: `Worbik` },
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
    { Icon: MdPermContactCalendar, url: `//resume.saeris.gg`, label: `Resume` },
    { Icon: SiGmail, url: `mailto:yo@saer.is`, label: `Email` }
  ]
};
