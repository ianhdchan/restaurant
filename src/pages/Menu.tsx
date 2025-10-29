import { MenuCard } from "@/components/MenuCard";
import { useMenuContext } from "@/context/MenuContext";
import type { Menu } from "@/types/menu";

export function Menu() {
  const { menu } = useMenuContext();
  const someItems = menu.filter((item) => item.rate > 4).slice(0, 20);

  return (
    <>
      <div className="mt-3">
        <div>
          <h1 className="text-5xl py-15 font-extrabold">MENU</h1>
        </div>
        <section className="py-20 bg-linear-to-b from-black to-zinc-950 text-white">
          <h3>Our delicious meat sourced from the best Canadian farmers.</h3>
        </section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 w-full box-border">
          {someItems.map((food: Menu) => (
            <MenuCard key={food.id} menu={food} />
          ))}
        </div>
      </div>
    </>
  );
}
