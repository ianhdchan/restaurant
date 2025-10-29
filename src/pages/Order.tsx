import { Link } from "react-router-dom";

export function Order() {
  return (
    <div className="flex flex-col py-12 text-center">
      <h1 className="text-3xl font-extrabold py-20">
        Order — Work in progress
      </h1>
      <p className="text-zinc-600 mb-6">
        The ordering flow is still under construction. You can preview the
        experience here and return to the menu to add items.
      </p>

      <div className="flex flex-col items-center justify-center gap-4">
        <button
          disabled
          className="rounded-md bg-orange-500 px-4 py-2 text-white opacity-80 cursor-not-allowed"
        >
          Place order (WIP)
        </button>
      </div>
      <div className="w-full py-10">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight py-40 text-white bg-black">
          In the meantime, please check out our menu!
        </h1>
        <Link
          to="/menu"
          className="inline-flex items-center rounded-md border border-orange-500 px-5 py-3 mt-10 text-orange-400 hover:text-white hover:bg-orange-500"
        >
          View Menu
        </Link>
      </div>
    </div>
  );
}
