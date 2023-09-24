import React from "react";
import Image from "next/image";
import HeaderBGIcon from "public/icons/Header.svg";
import HeaderLogoIcon from "public/icons/HeaderLogo.svg";
import "@fontsource/krona-one";
// Supports weights 100-900
import "@fontsource/jost";
import { useTranslation } from "next-i18next";
import { LogoFrame } from "~/application/shared/ui/logo-frame";
import { NavLink } from "~/application/shared/ui/navbar-link";

interface NavItem {
  title: string;
}

export const Navbar = () => {
  const { t } = useTranslation(["common"]);
  const localizationData = t("header.navbar.items", {
    returnObjects: true,
  });

  const navItems: NavItem[] | undefined = Array.isArray(localizationData)
    ? localizationData
    : undefined;

  return (
    <>
      <header className="relative mx-auto flex max-w-screen-xl justify-center">
        <div className="relative ">
          <Image src={HeaderBGIcon} width={1240} height={240} alt="header-bg" />
        </div>
      
          <LogoFrame />
       
        <nav className="absolute right-0 flex rounded-[100px] bg-white lg:top-7 ">
          {navItems?.map((item: NavItem, i: number) => {
            const className =
              i === navItems.length - 1
                ? "rounded-[100px] border border-red-400 border-opacity-30"
                : ""; // if last item
            return (
              <>
                <NavLink value={item.title} className={className} />
              </>
            );
          })}
        </nav>
      </header>
    </>
  );
};
