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
    <header className="flex items-center justify-around py-2">
      <div className="brand">
        <Link to="/" className="brand-link">
          Always BBQ
        </Link>
      </div>
      <NavigationMenu>
        <NavigationMenuList>
          {/* Home */}
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Menu */}
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/menu">Menu</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Locations */}
          {/* Menu */}
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/locations">Locations</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
