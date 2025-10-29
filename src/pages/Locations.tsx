import { LocationCard } from "@/components/LocationCard";
import LOCATIONS from "@/data/location.json";

export function Locations() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <header className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          Our Locations — Downtown Vancouver
        </h1>
        <p className="mt-2 text-zinc-600">
          Visit any of our Downtown Vancouver locations for authentic smoked
          BBQ.
        </p>
      </header>

      <div className="grid gap-6">
        {LOCATIONS.map((loc) => (
          <LocationCard key={loc.id} loc={loc} />
        ))}
      </div>
    </div>
  );
}
