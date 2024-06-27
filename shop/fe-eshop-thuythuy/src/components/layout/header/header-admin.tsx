import React, { useRef } from "react";
import { siteSettings } from "@settings/site-settings";
import HeaderMenu from "@components/layout/header/header-menu";
import Logo from "@components/ui/logo";
import { addActiveScroll } from "@utils/add-active-scroll";
import LanguageSwitcher from "@components/ui/language-switcher";

type DivElementRef = React.MutableRefObject<HTMLDivElement>;
const { site_header } = siteSettings;
const HeaderAdmin: React.FC = () => {
  const siteHeaderRef = useRef() as DivElementRef;
  addActiveScroll(siteHeaderRef);

  return (
    <header
      id="siteHeader"
      ref={siteHeaderRef}
      className="w-full h-16 sm:h-20 lg:h-24 relative z-20"
    >
      <div className="innerSticky text-gray-700 body-font fixed bg-white w-full h-16 sm:h-20 lg:h-24 z-20 ps-4 md:ps-0 lg:ps-6 pe-4 lg:pe-6 transition duration-200 ease-in-out">
        <div className="flex items-center justify-center mx-auto max-w-[1920px] h-full w-full">
          <Logo />
          <HeaderMenu
            data={site_header.menu}
            className="hidden lg:flex md:ms-6 xl:ms-10"
          />
          <div className="flex-shrink-0 ms-auto lg:me-5 xl:me-8 2xl:me-10">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderAdmin;
