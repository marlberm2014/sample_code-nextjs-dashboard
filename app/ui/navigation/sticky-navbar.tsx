import { useEffect, useState } from "react";
import { Button, IconButton, Typography, Collapse, Navbar } from "@material-tailwind/react";
import { Archive, Menu, MultiplePages, ProfileCircle, SelectFace3d, Xmark } from "iconoir-react";

import MainLogo from "@/app/ui/main-logo";
import Link from "next/link";

const LINKS = [
  {
    icon: MultiplePages,
    title: "Pages",
    href: "#",
  },
  {
    icon: ProfileCircle,
    title: "Account",
    href: "#",
  },
  {
    icon: SelectFace3d,
    title: "Blocks",
    href: "#",
  },
  {
    icon: Archive,
    title: "Docs",
    href: "#",
  },
];

function NavList() {
  return (
    <ul className="mt-4 flex flex-col gap-x-3 gap-y-1.5 lg:mt-0 lg:flex-row lg:items-center">
      {LINKS.map(({ icon: Icon, title, href }) => (
        <li key={title}>
          <Typography
            as="a"
            href={href}
            type="small"
            className="flex items-center gap-x-2 p-1 text-lg text-green-950 hover:text-white"
          >
            <Icon className="h-4 w-4" />
            {title}
          </Typography>
        </li>
      ))}
    </ul>
  );
}

export function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  return (
    <Navbar className="sticky top-0 mx-auto w-full max-w-screen-xl border-0">
      <div className="flex items-center">
        <Typography as="a" href="#" type="small" className="group ml-2 mr-2 block py-1 font-semibold">
          <MainLogo />
        </Typography>
        <hr className="ml-1 mr-1.5 hidden h-5 w-px border-l border-t-0 border-secondary-dark lg:block" />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <Link
          href="/login"
          className="hidden items-center rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base lg:ml-auto lg:inline-block"
        >
          Log in
        </Link>
        <IconButton
          size="sm"
          variant="ghost"
          color="secondary"
          onClick={() => setOpenNav(!openNav)}
          className="ml-auto grid lg:hidden"
        >
          {openNav ? <Xmark className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <Button isFullWidth size="sm" className="mt-4">
          Sign In
        </Button>
      </Collapse>
    </Navbar>
  );
}
