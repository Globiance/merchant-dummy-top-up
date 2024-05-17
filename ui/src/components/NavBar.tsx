"use client";

import { useMediaQuery } from "usehooks-ts";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

interface INavBar {
  active: string;
}

export default function NavBar({ active }: INavBar) {
  const matches = useMediaQuery("(min-width: 768px)");

  const [nav, setNav] = useState(<></>);

  useEffect(() => {
    const component = matches ? (
      <DesktopNav active={active as any} />
    ) : (
      <MobileNav active={active as any} />
    );

    setNav(component);
  }, [matches]);

  return nav;
}
