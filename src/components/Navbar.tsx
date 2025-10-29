import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

export function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-zinc-900/95 backdrop-blur shadow-md shadow-current">
      <div className="brand">
        <Link
          to="/"
          className="flex flex-row items-center gap-3 brand-link text-white text-lg font-semibold"
        >
          <img
            src="https://cdn.prod.website-files.com/68b1e253311fe5cc1a9525be/68b1e41e387563285c270651_logo.svg"
            width="40"
            alt="Logo"
          />
          DNA BBQ
        </Link>
      </div>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-4">
          {/* Home */}
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link
                to="/"
                className="text-white px-3 py-1 rounded bg-transparent"
              >
                <p className="hover:text-orange-400"> Home</p>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Menu */}
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link
                to="/menu"
                className="text-white px-3 py-1 rounded bg-transparent hover:text-orange-400"
              >
                Menu
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Locations */}
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link
                to="/locations"
                className="text-white px-3 py-1 rounded bg-transparent hover:text-orange-400"
              >
                Locations
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="ml-4">
        <Link
          to="#"
          className="inline-flex items-center rounded-md bg-orange-500 px-3 py-2 text-sm font-medium text-white hover:bg-orange-400 transition-colors"
        >
          Order Online
        </Link>
      </div>
    </header>
  );
}
