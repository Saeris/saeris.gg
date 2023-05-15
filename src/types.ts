import type { IconType } from "react-icons";

export interface SiteConfig {
  /** Your name as you would like it to appear on your page. */
  name: string;
  /** A title or short bio to appear beneath your name. */
  title: string;
  /**
   * Add your social media links to any of the fields below.
   * You can change their order to adjust the order in which
   * they will appear on your page.
   *
   * Empty links will not appear on your profile.
   * Links must be a URL.
   */
  links: {
    Icon: IconType;
    /** Where you want to direct visitors when clicking the link. */
    url: string;
    /**
     * Optional: Some text to display on the link button insead
     * of the platform name which is used by default.
     */
    label: string;
  }[];
}
