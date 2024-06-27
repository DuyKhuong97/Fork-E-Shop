import { VNFlag } from "@components/icons/VNFlag";
import { CZFlag } from "@components/icons/CZFlag";
import { USFlag } from "@components/icons/USFlag";
import { CategoryIcon } from "@components/icons/CategoryIcon";

export const siteSettings = {
  name: "Obchodni Centrum",
  description: "Hat Solutions",
  author: {
    name: "Hat solutions",
    websiteUrl: "https://hatss.eu",
    address: "",
  },
  logo: {
    url: "/assets/images/logo-shop3.svg",
    alt: "Hat solutions",
    href: "/",
    height: 95,
    width: 200,
  },
  defaultLanguage: "en",
  currencyCode: "CZK",
  site_header: {
    menu: [
      {
        id: 5,
        path: "/search",
        label: "menu-store",
        subMenu: null,
        icon: <CategoryIcon width="25px" height="25px" />,
      },
    ],
    mobileMenu: [
      {
        id: 5,
        path: "/search",
        label: "menu-store",
        subMenu: null,
        icon: <CategoryIcon width="20px" height="20px" />,
      },
    ],
    languageMenu: [
      {
        id: "cz",
        name: "Cesky - CZ",
        value: "cz",
        icon: <CZFlag width="20px" height="15px" />,
      },
      {
        id: "en",
        name: "English - EN",
        value: "en",
        icon: <USFlag width="20px" height="15px" />,
      },
      {
        id: "vn",
        name: "Tiếng Việt - VN",
        value: "vn",
        icon: <VNFlag width="20px" height="15px" />,
      },
    ],
  },
};
