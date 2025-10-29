import { cn } from "@/lib/utils";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Menu } from "lucide-react";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/locations", label: "Locations" },
];

export function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-zinc-900/95 backdrop-blur shadow-md shadow-current">
      <div className="flex items-center gap-3">
        {/* Hamburger */}
        <div className="md:hidden">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="h-12 w-12">
                <Menu strokeWidth={4} />
              </Button>
            </PopoverTrigger>

            <PopoverContent align="start" className="w-56 p-1 bg-zinc-900/95">
              <NavigationMenu className="max-w-none">
                <NavigationMenuList className="flex-col items-start gap-0">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavLink
                        to={link.href}
                        end={link.href === "/"}
                        className={({ isActive: routeActive }) =>
                          cn(
                            "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                            routeActive ? "text-primary" : "text-white"
                          )
                        }
                      >
                        {link.label}
                      </NavLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
        </div>

        {/* Logo */}
        <Link
          to="/"
          className="flex flex-row items-center gap-3 brand-link text-white text-lg font-semibold"
        >
          <img
            src="https://cdn.prod.website-files.com/68b1e253311fe5cc1a9525be/68b1e41e387563285c270651_logo.svg"
            width="40"
            alt="Logo"
          />
          <span className="hidden md:inline-block">DNA BBQ</span>
        </Link>
      </div>

      {/* Desktop sizing */}
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="flex gap-4">
          {navigationLinks.map((link, index) => (
            <NavigationMenuItem key={index}>
              <NavLink
                to={link.href}
                end={link.href === "/"}
                className={({ isActive: routeActive }) =>
                  cn(
                    "relative inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors no-underline",
                    routeActive
                      ? "text-primary"
                      : "text-white hover:text-primary",
                    "before:absolute before:bottom-0 before:left-0 before:right-0 before:h-0.5 before:bg-primary before:scale-x-0 before:transition-transform before:duration-300",
                    routeActive
                      ? "before:scale-x-100"
                      : "hover:before:scale-x-100"
                  )
                }
              >
                {link.label}
              </NavLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <Button className="ml-4">
        <Link
          to="/order"
          className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium text-white hover:text-black transition-colors"
        >
          Order Online
        </Link>
      </Button>
    </header>
  );
}
