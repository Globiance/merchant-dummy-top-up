"use client";

import { useMediaQuery } from "usehooks-ts";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

export default function NavBar() {
  const matches = useMediaQuery("(min-width: 768px)");

  const [nav, setNav] = useState(<></>);

  useEffect(() => {
    const component = matches ? <DesktopNav /> : <MobileNav />;

    setNav(component);
  }, [matches]);

  return nav;
}
