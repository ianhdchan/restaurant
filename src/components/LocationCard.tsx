import type { Location } from "@/types/location";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
const GOOGLE_MAPS_URL = import.meta.env.VITE_GOOGLE_MAPS_URL;

export function LocationCard({ loc }: { loc: Location }) {
  function mapEmbedSrc(address: string) {
    return `${GOOGLE_MAPS_URL}?q=${encodeURIComponent(
      address
    )}&z=15&output=embed`;
  }
  return (
    <Card className="overflow-hidden rounded-b-none border-0 border-b shadow-none">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row ">
          <div className="w-full md:w-1/2 h-52 md:h-auto">
            <iframe
              title={loc.name}
              src={mapEmbedSrc(loc.address)}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-hidden="false"
            />
          </div>

          <div className="p-6 w-full md:w-1/2">
            <CardTitle className="text-lg md:text-xl text-zinc-900">
              {loc.name}
            </CardTitle>

            <CardDescription className="mt-2 text-sm text-zinc-600">
              {loc.address}
            </CardDescription>

            <div className="mt-4 text-sm text-left text-zinc-700 space-y-2">
              <div className="flex flex-col justify-center items-center gap-2">
                <p className="font-medium">Phone:</p>
                <p>
                  <Link
                    className="text-orange-600 hover:underline"
                    to={`tel:${loc.phone}`}
                  >
                    {loc.phone}
                  </Link>
                </p>
                <p className="font-medium">Hours:</p>
                <p>
                  {loc.hours.split(",").map((hours) => {
                    return <p>{hours}</p>;
                  })}
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-col items-center gap-3">
              <Link
                to="#"
                className="text-sm inline-flex items-center px-3 py-2 rounded-md bg-zinc-900 text-white hover:bg-zinc-800 transition"
              >
                View details
              </Link>

              <Button>
                <Link
                  className="text-sm text-white hover:text-zinc-900 transition"
                  to={`${GOOGLE_MAPS_URL}/dir/?api=1&destination=${encodeURIComponent(
                    loc.address
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open in Google Maps
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
