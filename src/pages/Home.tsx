import { MenuCarousel } from "@/components/MenuCarousel";
import { useMenuContext } from "@/context/MenuContext";
import { Link } from "react-router-dom";

export function Home() {
  const { menu } = useMenuContext();

  return (
    <div>
      <section className="relative isolate overflow-hidden bg-linear-to-b from-black to-zinc-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Real Crispy. Real Smokey.
          </h1>
          <p className="mt-4 max-w-2xl text-zinc-300">
            Hand brushed, hand battered, fried low and slow for unmatched
            crunch.
          </p>
          <div className="mt-8 flex gap-3">
            <Link
              to="/order"
              className="inline-flex items-center rounded-md bg-orange-500 px-5 py-3 text-white font-medium hover:bg-primary"
            >
              Order Online
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center rounded-md border border-primary px-5 py-3 text-primary hover:text-white hover:bg-primary"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Our Favorites
        </h2>
        <MenuCarousel menu={menu} />
      </section>
    </div>
  );
}
