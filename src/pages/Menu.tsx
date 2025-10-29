import { MenuCard } from "@/components/MenuCard";
import { useMenuContext } from "@/context/MenuContext";
import type { Menu } from "@/types/menu";

export function Menu() {
  const { menu } = useMenuContext();

  return (
    <>
      <div className="mt-3">
        <div>
          <h1>Menu</h1>
          
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 w-full box-border">
          {menu.map((food: Menu) => (
            <MenuCard key={food.id} menu={food} />
          ))}
        </div>
      </div>
    </>
  );
}
