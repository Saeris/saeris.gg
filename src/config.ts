import {
  SiBluesky,
  SiLinkedin,
  SiGmail,
  SiInstagram,
  SiGithub,
  SiSteam,
  SiThreads
} from "react-icons/si";
import { TfiTwitterAlt } from "react-icons/tfi";
import { MdPermContactCalendar } from "react-icons/md";
import type { SiteConfig } from "./types";

export const config: SiteConfig = {
  name: `Drake Costa`,
  title: `Engineering • Design • Photography`,
  links: [
    { Icon: MdPermContactCalendar, url: `//resume.saeris.gg`, label: `Resume` },
    { Icon: SiGithub, url: `//github.com/saeris`, label: `Github` },
    { Icon: SiBluesky, url: `//bsky.app/profile/saeris.gg`, label: `Bluesky` },
    { Icon: TfiTwitterAlt, url: `//twitter.com/saeris`, label: `Twitter` },
    {
      Icon: SiThreads,
      url: `//www.threads.net/saeris.gg`,
      label: `Threads`
    },
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
    { Icon: SiGmail, url: `mailto:yo@saer.is`, label: `Email` }
  ]
};
